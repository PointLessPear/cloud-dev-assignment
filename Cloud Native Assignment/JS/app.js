IUPS = "https://prod-242.westeurope.logic.azure.com:443/workflows/f50bf22a87244626ad2e36fa529c21d7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dBw5_7hifU401iiKssPukIheKEle6MLMnLX_5pCJ2sY"
RAI = "https://prod-22.eastus.logic.azure.com:443/workflows/02bee9e3e4634f5c8d6d46482deb442f/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yaj9xUFTk-nN_AgPKKJPCfQqoTMzg8lpIFEh3_vyTPk";
RAIGET0 = "https://prod-27.eastus.logic.azure.com/workflows/2b79df80fdd54234a2ff7140644a762b/triggers/manual/paths/invoke/rest/v1/assets/"
RAIGET1 = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=GbtHzyQ7BVjbT9axmUV4qcnVIiMf_3LOq9fZPM7lVQM"

RAAURI = "https://prod-119.westeurope.logic.azure.com/workflows/b7c956cf439143fa80bc7bbc930e0431/triggers/manual/paths/invoke/rest/v1/drivers?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bvO6WIHOZtJ94jQMTW45s9Ug9KpsqAOpxEGKqUVlLhY";
CIAURI = "https://prod-80.westeurope.logic.azure.com/workflows/e9d6881e44314e20afe57ab572f229e1/triggers/manual/paths/invoke/rest/v1/drivers?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8k-7Q77OgKjLXgWND6G-YMbyyckpmmKj4KddXKU0mKI"

UIAIMAGE0 = "https://prod-207.westeurope.logic.azure.com/workflows/b7a71ab902e043f8aea841652b389f75/triggers/manual/paths/invoke/rest/v1/assets/"
UIAIMAGE1 = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=GxRJzqBfkh1f23X5cQCeH2m8ZvHQmyrM9Xrv-n55YD4"

RIAURI0 = "https://prod-46.westeurope.logic.azure.com/workflows/cd9b75a3ea034679835ca54caa2e364f/triggers/manual/paths/invoke/rest/v1/assets/"
RIAURI1 = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iRBZXuHmZQYSdLTxCVUfXdaIOWb0JlbxYPKcsiJNWew"

UIAURI0 = "https://prod-77.eastus.logic.azure.com/workflows/7fdcd02e0bdb41939bc9af99b67883f7/triggers/manual/paths/invoke/rest/v1/assets/"
UIAURI1 = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rUGU19MJ9TwLFooV6ttBWWd05adssUqaH89s8TrGozc"

DIAURI0 = "https://prod-240.westeurope.logic.azure.com/workflows/29b5e345fe1c4a01b99d31368e15893e/triggers/manual/paths/invoke/rest/v1/assets/";
DIAURI1 = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=o3urMy16oThO2gs_LywqxG0MNsq6Xxd1v1J8bJtZr04";

DIAURI2 = "https://prod-44.eastus.logic.azure.com/workflows/e420cb2e8c0e4f13b6c021c3e837172e/triggers/manual/paths/invoke/rest/v1/assets/"
DIAURI3 = "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=s7spwvjWLigCxrmmFWU0i4cC2SR-KvKN9i3Ue3ooxNI"
BLOB_ACCOUNT = "https://f1blobstoreage.blob.core.windows.net";

$(document).ready(function() {
  setupModal('firstModal');
  setupModal('secondModal');
 
  $("#retImages").click(function(){
      getImages();

  }); 


    $('#subNewMedia').click(function() {
      submitNewMedia();
    });

  

  $("#deleteImage").click(function(){
    deleteImage(id);
  });

  $(".nav-button").click(function() {
    openModal();
  });

  $("#editDriverClose").click(function() {
    $('#editDriverModal').hide(); 

  });

  $("#editImageClose").click(function() {
    $('#editImageModal').hide();
  })

  $("#retAssets").click(function(){
    getAssetList();

  }); 

  $("#subNewForm").click(function(){
    submitNewAsset();
    
  }); 
  $('#saveEditImage').click(function() {
    submitEditMedia();
  });

  $('#saveEditForm').click(function() {
    var driverID = $(this).data('driverID');
    submitEditAsset(driverID);
  });

  
  document.addEventListener('click', function(event) {
    if (event.target.matches('.editMedia')) { 
      var mediaID = event.target.getAttribute('data-media-id'); 
      document.getElementById('editMediaID').value = mediaID;
      openEditModal();
    }
  });

  $('#view-images').click(function() {
    var imageGrid = document.getElementsByClassName('image-grid')[0]; 
    var assetList = document.getElementById('AssetList'); 
  
    if (imageGrid) {
      imageGrid.style.display = "block";
    }
    if (assetList) {
      assetList.style.display = "none";
    }
  });
  
  $('#view-drivers').click(function() { 
    var imageGrid = document.getElementsByClassName('image-grid')[0];
    var assetList = document.getElementById('AssetList'); 
  
    if (imageGrid) {
      imageGrid.style.display = "none";
    }
    if (assetList) {
      assetList.style.display = "flex";
    }
  });
  
});
document.addEventListener('DOMContentLoaded', () => {
  const languageLinks = document.querySelectorAll('.nav-dropdown-content a[data-lang]');

  languageLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const language = this.getAttribute('data-lang');
          setLanguagePreference(language);
      });
  });

  const savedLanguage = getLanguagePreference();
});

function setLanguagePreference(language) {
  localStorage.setItem('preferredLanguage', language);
}

function getLanguagePreference() {
  return localStorage.getItem('preferredLanguage') || 'en';
}

async function translateText(text, targetLanguage) {
  
  const subscriptionKey = 'b417765755194676a370ca0cba542d3e'; 
  const region = 'eastus2'; 
  const endpoint = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLanguage}`;

  try {
      const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
              'Ocp-Apim-Subscription-Key': subscriptionKey,
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Region': region,
          },
          body: JSON.stringify([{ Text: text }])
      });

      if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data[0].translations[0].text;
  } catch (error) {
      console.error('Error translating text:', error);
      return text; // Return the original text if translation fails
  }
}

function moderateContent(imageUrl) {
  var apiKey = "d93204722593474797ff1a18a4a61e10"; // Store this securely
  var endpoint = "https://f1contentmod.cognitiveservices.azure.com/contentmoderator/moderate/v1.0/ProcessImage/Evaluate";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);

  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        var response = JSON.parse(this.responseText);
        console.log(response); // Handle the response
        // Check if content is acceptable
        if (isContentAcceptable(response)) {
          console.log('Content is acceptable.');
          // Here you can perform actions if the content is deemed acceptable
        } else {
          console.log('Content is not acceptable.');
       
        }
      } else {
      }
    }
  };

  var data = JSON.stringify({
    "DataRepresentation": "URL",
    "Value": imageUrl
  });

  xhr.send(data);
}

function submitNewMedia() {
  var submitData = new FormData();
  submitData.append('FileName', $('#FileName').val());
  submitData.append('UserID', $('#userID').val());
  submitData.append('UserName', $('#userName').val());
  submitData.append('File', $("#UpFile")[0].files[0]);

  $.ajax({
    url: IUPS, 
    data: submitData,
    cache: false,
    enctype: 'multipart/form-data',
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data) {
      console.log(data);
      var imageUrl = data.imageUrl; 
      moderateContent(imageUrl);
      getImages();
    },
    error: function() {
      alert('There was an error uploading the file!');
    }
  });
}

  

async function getImages() {
  // Define the labels you want to translate
  const targetLanguage = getLanguagePreference();
  const labels = {
    file: 'File',
    uploadedBy: 'Uploaded by',
    // Add any other labels you want to translate
  };

  // Translate the labels
  for (let key in labels) {
    labels[key] = await translateText(labels[key], targetLanguage);
  }
  console.log(labels);
  // Fetch and process the image data
  $.getJSON(RAI, function(data) {
    var items = [];
    $.each(data, function(key, val) {
      var imageUrl = BLOB_ACCOUNT + val["filePath"];

      var itemHtml = "<div class='image-item'>";
      itemHtml += "<img src='" + imageUrl + "' width='400'/>";
      itemHtml += "<div class='media-info'><p>" + labels.file + ": " + val["fileName"] + "</p>";
      itemHtml += "<p>" + labels.uploadedBy + ": " + val["userName"] + " (user id: " + val["userID"] + ")</p></div>";
      itemHtml += "<div class='button-container'>";
      itemHtml += "<button class='btn-delete' onclick='deleteImage(\"" + val['id'] + "\")'>Delete</button>";
      itemHtml += "<button class='btn-mediaEdit' onclick='editMedia(\"" + val['id'] + "\")'>Edit</button>";
      itemHtml += "</div>";
      itemHtml += "</div>";

      items.push(itemHtml);
    });

$('#ImageList').empty();
$("<div/>", {
    "class": "my-new-list",
    html: items.join("")
}).appendTo("#ImageList");

  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error fetching data: " + textStatus, errorThrown); 
  });

}

function editMedia(mediaID) {
  $.getJSON(RAIGET0 + mediaID + RAIGET1, function(mediaData) {
    console.log(mediaData);
    if (mediaData) {
      $('#editFileName').val(mediaData.fileName);
      $('#editUserID').val(mediaData.userID);
      $('#editUserName').val(mediaData.userName);
      $('#editUpFile').attr('src', BLOB_ACCOUNT + mediaData.filePath);
      $('#editMediaID').text(mediaID);
      $('#editMediaID').val(mediaID); 
      $('#editImageModal').show();
    } else {
      console.log('No data found for media with ID:', mediaID);
    }
  });
}

function loadExistingImageAsBlob(mediaID) {
  var imageUrl = RAIGET0 + mediaID + RAIGET1;

  return fetch(imageUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      return new File([blob], "existingImage.png", { type: "image/png" });
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

function submitEditMedia() {
  var mediaID = $('#editMediaID').val(); 
  var editData = new FormData();
  editData.append('FileName', $('#editFileName').val());
  editData.append('UserID', $('#editUserID').val());
  editData.append('UserName', $('#editUserName').val());

  if ($("#editUpFile")[0].files[0]) {
    editData.append('file', $("#editUpFile")[0].files[0]);
    submitMediaForm(editData, mediaID);
  } else {
    loadExistingImageAsBlob(mediaID).then(blobFile => {
      if (blobFile) {
        editData.append('file', blobFile);
      }
      submitMediaForm(editData, mediaID);
    });
  }
}

function submitMediaForm(editData, mediaID) {
  console.log(editData);
  $.ajax({
    url: UIAIMAGE0 + mediaID + UIAIMAGE1,
    data: editData,
    cache: false,
    enctype: 'multipart/form-data',
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data){
      clearEditImageForm();
      getImages();
      $('#editImageModal').hide();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error('Error updating media:', errorThrown);
    }
  });
}


function clearEditImageForm() {
  $('#editFileName').val('');
  $('#editUserID').val('');
  $('#editUserName').val('');
  $('#editUpFile').val('');
  $('#editMediaID').val('');
  $('#displayMediaID').text('');
}
function deleteImage(id)  {
  $.ajax({
    type: "DELETE",
    url: DIAURI2 + id + DIAURI3,

  }).done(function(response) {
    console.log("Image Delete Succesfully: ", response)
    getImages();
  }).fail(function(error){
    console.error("Error deleting image: ", error);
  });
}

function submitNewAsset(){
  
  var subObj = {
    driverRef: $('#driverRef').val(),
    code: $('#code').val(),
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    nationality: $('#nationality').val(),
    dateOfBirth: $('#dateOfBirth').val(),
    constructor: $('#constructor').val(),
    number: $('#number').val(),
    wins: $('#wins').val(),
    podiums: $('#podiums').val(),
    polePositions: $('#polePositions').val(),
    racesParticipated: $('#racesParticipated').val(),
    championships: $('#championships').val()
  }
  subObj = JSON.stringify(subObj); 

  $.post({
    url: CIAURI,
    data: subObj,
    contentType: 'application/json; charset=utf-8'
  }).done(function(response) {
    getAssetList();
  });
}  

async function getAssetList() {
  const targetLanguage = getLanguagePreference(); 
  console.log(targetLanguage);

  const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    nationality: "Nationality",
    dateOfBirth: "Date Of Birth",
    constructor: "Constructor",
    number: "Number",
    wins: "Wins",
    podiums: "Podiums",
    polePositions: "Pole Positions",
    racesParticipated: "Races Participated",
    championships: "Championships"
  }

  for (let key in labels) {
    labels[key] = await translateText(labels[key], targetLanguage);
  }
  $.getJSON(RAAURI, function(data) {
    var items = [];
    
      $.each(data, function(key, val) {
        var cardHtml = `
          <div class="card">
            <div class="card-content">
              <h5 class="card-header">${val["driverRef"]} - ${val['code']}</h5>
              <div class="card-body">
                <p>${labels.firstName}: ${val['firstName']}</p>
                <p>${labels.lastName}: ${val['lastName']}</p>
                <p>${labels.nationality}: ${val['nationality']}</p>
                <p>${labels.dateOfBirth}: ${val['dateOfBirth']}</p>
                <p>${labels.constructor}: ${val['constructor']}</p>
                <p>${labels.number}: ${val['number']}</p>
                <p>${labels.wins}: ${val['wins']}</p>
                <p>${labels.podiums}: ${val['podiums']}</p>
                <p>${labels.polePositions}: ${val['polePositions']}</p>
                <p>${labels.racesParticipated}: ${val['racesParticipated']}</p>
                <p>${labels.championships}: ${val['championships']}</p>
                <button type="button" class="btn-delete" onclick="deleteAsset(${val['driverID']})">Delete</button>
                <button class="btn-edit" onclick="editAsset(${val['driverID']})">Edit</button>
              </div>
            </div>
          </div>
        `;
        items.push(cardHtml);
      });
    
    $('#AssetList').empty().html(items.join(''));
  });
}
async function translateFormLabels(targetLanguage) {
  const labels = [
      { id: 'editDriverRef', text: 'Driver Ref' },
      { id: 'editCode', text: 'Code' },
      { id: 'editFirstName', text: 'First Name' },
      { id: 'editLastName', text: 'Surname' },
      { id: 'editNationality', text: 'Nationality' },
      { id: 'editDateOfBirth', text: 'Date Of Birth' },
      { id: 'editConstructor', text: 'Constructor' },
      { id: 'editNumber', text: 'Number' },
      { id: 'editWins', text: 'Wins' },
      { id: 'editPodiums', text: 'Podiums' },
      { id: 'editPolePositions', text: 'Pole Positions' },
      { id: 'editRacesParticipated', text: 'Race Participated' },
      { id: 'editChampionships', text: 'Championships' },
      { id: 'editMediaID', text: 'Media ID' },
      { id: 'editFileName', text: 'File Name' },
      { id: 'editUserID', text: 'User ID' },
      { id: 'editUserName', text: 'Username' },
      { id: 'editUpFile', text: 'Replace File (optional)' },
      { id: 'driverRef', text: 'Driver Ref' },
      { id: 'code', text: 'Code' },
      { id: 'firstName', text: 'First Name' },
      { id: 'lastName', text: 'Surname' },
      { id: 'nationality', text: 'Nationality' },
      { id: 'dateOfBirth', text: 'Date of Birth' },
      { id: 'constructor', text: 'Constructor' },
      { id: 'number', text: 'Number' },
      { id: 'wins', text: 'Wins' },
      { id: 'podiums', text: 'Podiums' },
      { id: 'polePositions', text: 'Pole Positions' },
      { id: 'racesParticipated', text: 'Races Participated' },
      { id: 'championships', text: 'Championships' },
      { id: 'FileName', text: 'File Name' },
      { id: 'userID', text: 'User ID' },
      { id: 'userName', text: 'Username' },
      { id: 'UpFile', text: 'File to upload' }
  ];
  
  for (const label of labels) {
      const translatedText = await translateText(label.text, targetLanguage);
      document.querySelector(`label[for="${label.id}"]`).textContent = translatedText;
  }
}

// Example usage: Translate labels to Spanish when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  targetLanguage = getLanguagePreference();
  translateFormLabels(targetLanguage); // 'es' is the language code for Spanish
});

function editAsset(driverID) {
  console.log(123);
  $.getJSON(RIAURI0 + driverID + RIAURI1, function(driverData) {
    if (driverData) {
      
      $('#editDriverRef').val(driverData.driverRef);
      $('#editCode').val(driverData.code);
      $('#editFirstName').val(driverData.firstName);
      $('#editLastName').val(driverData.lastName);
      $('#editNationality').val(driverData.nationality);
      $('#editDateOfBirth').val(driverData.dateOfBirth);
      $('#editConstructor').val(driverData.constructor);
      $('#editNumber').val(driverData.number);
      $('#editWins').val(driverData.wins);
      $('#editPodiums').val(driverData.podiums);
      $('#editPolePositions').val(driverData.polePositions);
      $('#editRacesParticipated').val(driverData.racesParticipated);
      $('#editChampionships').val(driverData.championships);
      
      $('#saveEditForm').data('driverID', driverID);
      $('#editDriverModal').show();
    } else {
      console.log('No data found for driver with ID:', driverID);
    }
  });
}


function submitEditAsset(driverID){
  var editObj = {
    driverRef: $('#editDriverRef').val(),
    code: $('#editCode').val(),
    firstName: $('#editFirstName').val(),
    lastName: $('#editLastName').val(),
    nationality: $('#editNationality').val(),
    dateOfBirth: $('#editDateOfBirth').val(),
    constructor: $('#editConstructor').val(),
    number: $('#editNumber').val(),
    wins: $('#editWins').val(),
    podiums: $('#editPodiums').val(),
    polePositions: $('#editPolePositions').val(),
    racesParticipated: $('#editRacesParticipated').val(),
    championships: $('#editChampionships').val()
  }

  editObj = JSON.stringify(editObj);

  $.ajax({
    type: 'PUT',
    url: UIAURI0 + driverID + UIAURI1, 
    data: editObj,
    contentType: 'application/json; charset=utf-8',
    success: function(response) {
      getAssetList(); 
      $('#editModal').hide(); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Error updating asset:', errorThrown); 
    }
  });
}

function deleteAsset(id){
  $.ajax({
    type: "DELETE",
    url: DIAURI0 + id + DIAURI1,
  }).done(function(msg){
    getAssetList();
  });
}

function setupModal(modalId) {
  var modal = document.getElementById(modalId);

  var btn = document.querySelector(`[data-toggle="${modalId}"]`);

  var span = document.querySelector(`.close[data-modal="${modalId}"]`);

  if(btn) {
    btn.onclick = function() {
      modal.style.display = "block";
    }
  }

  span.onclick = function() {
    modal.style.display = "none";
    clearForm(modalId);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      clearForm(modalId);
    }
  }
}

function openModal() {
  var modal = document.getElementById("uploadModal");
  modal.style.display = "block";
}


function clearForm(modalId) {
  var form = document.querySelector(`#${modalId} form`);
  if(form) {
    form.reset();
  }
}

  
