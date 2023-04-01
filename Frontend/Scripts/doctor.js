async function getdata() {
    try {
        console.log("callled");
        const res = await fetch("http://localhost:8080/doctor/alldoctor");
        let data = await res.json();
        data = data.doctor;
        console.log(data);
        renderdata(data);
    } catch (error) {
        console.log(error.message);
    }
}
getdata();

function renderdata(data) {
    let container = document.getElementById("cont");

    let arr = data.map((ele) => {
        return `

        <div class=" mainbox">
        <div class="doc-image-info">
        <div class="image-sec">
            <img src="${ele.image}"
                alt="${ele.doctorName}">
            <span class="badge">
                <img src="https://www.practostatic.com/web-assets/images/prime_badge.8f4ca26c7f36.svg">
            </span>
            <button class="u-t-capitalize u-bold view-profile">
                View Profile
            </button>
        </div>


        <div class="info">
            <h2> ${ele.doctorName}</h2>
            <h5> ${ele.qualifications}</h5>
            <h5>${ele.experience}</h5>
            <div class="hosp-detail">
                <span>Yeshwanthpur,</span> ${ele.city}<span> Manipal Hospitals Yeshwanthpur</span><span>+2 and
                    more</span>
            </div>
            <span>800rs consulation fee at clinic</span>
            <div>
                <span class="o-label--success u-bold">
                    <i class="icon-ic_like_filled">
                    </i>
                    <span data-qa-id="doctor_recommendation">
                        95%
                    </span>
                </span>
                <span class="u-bold u-t-underline">
                    30&nbsp;
                    <span>
                        Patient Stories
                    </span>
                </span>
            </div>


        </div>
    </div>
    <div class="book-apt-sec">

        <div class="available"><i data-qa-id="time_icon" class="c-card__icon icon-ic_calendar u-valign--top">
            </i>
            <span data-qa-id="availability_text">
                Available
            </span>

        </div>


        <button class="btn">
        Book Now
    </button>

    <div id="slot-cont" class="div-hide">
        <div class="slot-container" id='good'>
            <h2 class="slot-heading">Available Slots</h2>
            <ul class="slot-list">
            <li>Timing</li>
            <li>2 PM </li>
            <li>3 PM </li>
            <li>4 PM </li>
            </ul>
        </div>

    </div>

    </div>
        </div>
        `;
    });

    console.log(arr.join(""));
    container.innerHTML = arr.join("");

     const buttons = document.getElementsByClassName('btn')
    const slot = document.getElementById('slot-cont')
    
    
    console.log(slot);
    for(let button of buttons){
        button.addEventListener('click', ()=>{
            slot.classList.add('active')
            console.log(slot, 'i am slot');
            slot.classList.remove('div-hide')
        //    console.log('hi');
        })
    }

}
