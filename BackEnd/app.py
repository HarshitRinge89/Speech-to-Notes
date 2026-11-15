import os
# import base64
from flask import Flask, jsonify, request,send_from_directory,send_file
from werkzeug.utils import secure_filename,safe_join
import whisper
from docx import Document
import whisper
import tempfile
from flask_cors import CORS
from io import BytesIO

app=Flask(__name__)
CORS(app)

BASE_DIR=os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.abspath(
    os.path.join(BASE_DIR,"../frontend/dist")
)
UPLOAD_FOLDER=os.path.join(BASE_DIR,"uploads")
os.makedirs(UPLOAD_FOLDER,exist_ok=True)

app.config["MAX_CONTENT_LENGTH"]=50*1024*1024

#install model 
print("Loading Whisper model...")
model=whisper.load_model("base.en") #large (for hindi or other languages)
print("Whisper Model installed succesfully")

#audio intake lega

@app.route("/api/transcribe", methods=["POST"])
def transcribe():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file received"}), 400

    audio = request.files["audio"]

    if audio.filename == "":
        return jsonify({"error": "No file selected"}), 400

    temp_path = None

    try:
        suffix = os.path.splitext(audio.filename)[1]

        with tempfile.NamedTemporaryFile(
            suffix=suffix, delete=False
        ) as temp:
            audio.save(temp)
            temp_path = temp.name

        # Whisper transcription
        result = model.transcribe(temp_path)
        transcription = result["text"]

        # Generate Word document
        # document = Document()
        # document.add_heading("Speech to Notes", 0)
        # document.add_paragraph(transcription)

        # output = BytesIO()
        # document.save(output)
        # output.seek(0)

        # # Convert DOCX into Base64
        # docx_base64 = base64.b64encode(
        #     output.getvalue()
        # ).decode("utf-8")

        print("Audio transcription completed successfully!")

        return jsonify({
            "transcription": transcription,
            # "document": docx_base64,
            # "filename": "transcription.docx"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)

#Server side code hai yeh
@app.route("/",defaults={"path":""})
@app.route("/<path:path>")
def home(path):
    file_path=os.path.join(FRONTEND_DIR,path)

    if file_path and os.path.isfile(file_path):
        return send_from_directory(FRONTEND_DIR,path)

    return send_from_directory(FRONTEND_DIR,"index.html")

if __name__=="__main__":
    app.run(debug=True,port=5000)