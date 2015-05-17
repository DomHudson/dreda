//// //// //// //// modals //// //// //// //// 

$('.ui.modal').modal({
    allowMultiple: false
  });

function toggleUploadModal(){
  $('#secondModal')
    .modal('attach events', '#firstModal .blue.button')
  ;

  $('#thirdModal')
    .modal('attach events', '#secondModal .positive.button')
  ;

  //$('#fourthModal')
  //  .modal('attach events', '#thirdModal .blue.button')
  //;

  $('#firstModal')
    .modal('show')
  ;
}

$('#thirdModal .massive.icon')
  .transition('set looping')
  .transition('pulse', '750ms');

function toggleExampleModal(){
  $('#exampleModal')
    .modal('show');
}

$('.ted').show();


$('#exampleMenu a.item')
  .on('click', function() {

    currentTab = $('.item.active')[0].getAttribute('data-tab-category')
    $('.' + currentTab).hide();

    $(this)
      .addClass('active')
      .closest('.ui.menu')
      .find('.item')
        .not($(this))
        .removeClass('active');

    selection = this.getAttribute('data-tab-category');

    $('.' + selection).show();
  });
;


//// //// //// //// file upload //// //// //// ////  

var userFile;
var data;

// listener
$('#fileInput').change(function(){
  userFile = this.files[0];
  readFile(userFile);
});

function readFile(userFile){

  if (userFile.type === 'application/json'){

    // reading them files
    var reader = new FileReader();
    reader.onload = function(event) {
      data = JSON.parse(event.target.result);
    }
    reader.readAsText(userFile);

    $('#thirdModal .positive.message').removeClass('hidden');
    $('#thirdModal .positive.button').removeClass('disabled');
  } else {
    $('#thirdModal .negative.message').removeClass('hidden');
  }
}

// file selector so we can hide ugly input
var fileSelector = $('#fileSelector');
var fileInput = $('#fileInput');

fileSelector.on('click', function(e){
  if (fileInput) {
    fileInput.click();
  }
  e.preventDefault();
});

function userPlot(){
  setTimeout(function(){
    plotData();
  $('#loader').removeClass('ui active dimmer');
  updateInfoBox();
  }, 200);

  hideAndLoad();
}

$('#userPlotButton').click(function(){

  // clear messages & and stuff
  $('#thirdModal .positive.message').addClass('hidden');
  $('#thirdModal .positive.button').addClass('disabled');
  $('#thirdModal .negative.message').addClass('hidden');

  // hell yeah
  userPlot();
})


//// //// //// //// side bar //// //// //// //// 

// click listener
$('.content.icon').click(function(){
  $('.ui.sidebar').sidebar('toggle');
  });


// These next two functions are unnecessary... however
// I feel that even the slight glimpse of the loader
// gives a polished look to the UI

function hideAndLoad(){
  $('.ui.modal').modal('hide');
  $('.ui.sidebar').sidebar('hide');
  $('#loader').addClass('ui active dimmer');
}
function plotExampleAndLoad(){
  setTimeout(function(){
    fetchData(
      $('#exampleModal .active')[0].getAttribute('data-tab-category')
      );
    plotData();
  $('#loader').removeClass('ui active dimmer');
  updateInfoBox();
  }, 200);

  hideAndLoad();
}

// this is all that really needs to happen
function plotExample(){
  fetchData();
  plotData();
}


// popups

$('#side-explanation a').popup({position: 'right center'})


//// //// //// //// info box //// //// //// //// 

// aka glowing / pulsing effect
$('.info.icon')
  .transition('set looping')
  .transition('pulse', '1500ms');

$('.info.icon').click(function(){
  $('#info-box').toggleClass('hidden');
});

function updateInfoBox(){
  // total size
  $('#statsSize').empty();
  $('#statsSize').append(_.size(organized));

  // number clusters
  $('#clusterSize').empty();
  $('#clusterSize').append(_.uniq(organized, Object.keys(data)[3]).length);
  $('#info-box').removeClass('hidden');

  // cluster info
   $('#clusterInfo').empty();
   for (i=0; i < groupedSize; i++){
      $('#clusterInfo').append(
        '<div style="color:'+colors[i]+';">Cluster ' + groupedKeys[i] + ' : ' + grouped[groupedKeys[i]].length + '</div>'
        );
  }
}

//initalize rotateToggle
$('.ui.checkbox')
  .checkbox();

$('.ui.checkbox').click(function(){
  rotateToggle();
});

$('.ui.undo').click(function(){
  resetCamera();
});

