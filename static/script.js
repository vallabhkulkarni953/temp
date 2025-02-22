function toggleInputFields() {
    document.getElementById("textInput").style.display = "none";
    document.getElementById("audioInput").style.display = "none";
    document.getElementById("videoInput").style.display = "none";
    
    let selectedType = document.getElementById("dataType").value;
    if (selectedType === "text") {
        document.getElementById("textInput").style.display = "block";
    } else if (selectedType === "audio") {
        document.getElementById("audioInput").style.display = "block";
    } else if (selectedType === "video") {
        document.getElementById("videoInput").style.display = "block";
    }
}

function validateFileSize() {
    let videoFile = document.getElementById("video").files[0];
    if (videoFile && videoFile.size > 500 * 1024 * 1024) { // 500MB limit
        alert("File size exceeds 500MB limit!");
        return false;
    }
    return true;
}