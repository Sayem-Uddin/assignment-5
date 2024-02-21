const allseats = document.querySelectorAll('.seat')
 let isClicked = false;
 let totalAmount =0;
 let perTicketPrice = 550;
 let availableSit = 40;
 let selectedSeat = 0;
 const totalAmountElement = document.getElementById('total-amount')
 const totalAvailableSit = document.getElementById('available-sit')
 const totalSelectedSeat = document.getElementById('selected-seat')
for (let seats of allseats){
    seats.addEventListener('click',function(event){
        console.log(seats);
        
        if (!(seats.classList.contains('active'))) {
            
            if(totalAmount < perTicketPrice*4){
                seats.style.backgroundColor = 'green';
            seats.classList.add('active');
            totalAmount+=550;
            totalAmountElement.textContent = totalAmount;
            availableSit-=1;
            totalAvailableSit.textContent = availableSit;
            selectedSeat+=1;
            totalSelectedSeat.textContent = selectedSeat;
            showElementById ('ticket-1')
            }
        }
        else{
            seats.style.backgroundColor = '#F7F8F8';
            seats.classList.remove('active');
            totalAmount-=550;
            totalAmountElement.textContent = totalAmount;
            availableSit+=1;
            totalAvailableSit.textContent = availableSit;
            selectedSeat-=1;
            totalSelectedSeat.textContent = selectedSeat;
        }
        
})
}

console.log(totalAmountElement.textContent)
// cupon section
