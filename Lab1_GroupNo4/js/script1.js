function displayData()
{
    var EventType = document.display.EventType.value;
    var EventTitle = document.display.EventTitle.value;
    var EventDates = document.display.EventDates.value;
    var PostingDate2 = document.display.PostingDate2.value;
    var PostingDate = document.display.PostingDate.value;

    if(EventType == "" || EventTitle == "" || EventDates == "" || PostingDate2 == "" || PostingDate == ""){
        alert("Aww Snap, Please complete the form");
        return false;
    }else{
        alert("Event Form Submitted"); 
    }
}