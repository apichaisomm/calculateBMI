var weightInput = document.querySelector("#weight");
var statureInput = document.querySelector("#stature");
var calculateButton = document.querySelector(".calculate");
var bmiInput = document.querySelector("#bmiInput");
var weight = 0;
var stature =0;
var results = '';
document.getElementById("bmiInput").readOnly = true;
document.getElementById("bsa").readOnly = true;
var fnameInput = document.querySelector("#name");

Swal.fire({
    title: 'ยินดีต้อนรับ',
    text: 'เข้าสู่เว็บไซต์ การคำนวณ BMI',
    icon: 'success',
    confirmButtonText: 'ไปเริ่มทำกันเลย'
});

window.onload = () => {
    if(calculateButton){
        console.log(calculateButton)
        calculateButton.addEventListener("click", calculateBmiAlert);

    }
    if(weightInput){
        console.log(weightInput)
        weightInput.addEventListener("change", showBmi);
    }
    if(statureInput){
        console.log(statureInput)

        statureInput.addEventListener("change", showBmi);
    }

}
    

function calculateBmi(weight,stature){

    let bmi = weight/((stature/100)*(stature/100));
    let bsa = Math.sqrt(weight*stature/3600);
    console.log("BMI : "+ bmi.toFixed(2));
    console.log("BSA : "+ bsa.toFixed(2));
    document.getElementById("bmiInput").value =  bmi.toFixed(2) ;
    document.getElementById("bsa").value =  bsa.toFixed(2) ;
    alert(showBmi(bmi,bsa));
    // return "BMI : "+ bmi.toFixed(2) + " BSA :" + bsa.toFixed(2);
}

function showBmi(){
    fname =fnameInput.value;
    weight = weightInput.value;
    stature = statureInput.value;
    let bmi = weight/((stature/100)*(stature/100));
    let bsa = Math.sqrt(weight*stature/3600);
    if(isNaN(bmi)){
        bmi = 0.00;
    }else{
        console.log('else bmi')

    }
    if(isNaN(bsa)){
        bsa = 0.00;
    }else{
        console.log('else msa')
    }
    // bmi = 29.00
    if(bmi >= 30.00){
        results = 'อันตรายระดับ 2';
    }else if (bmi >= 25.00 && bmi < 29.99){
        results = 'อันตรายระดับ 1';
    }else if(bmi >= 23.00 && bmi < 24.99){
        results = 'น้ำหนักเกิน';
    }else if(bmi >= 18.50 && bmi < 22.59){
        results = 'อยู่ในเกณฑ์ปกติ';
    }else if(bmi >= 0.00 && bmi < 18.50){
        results = 'อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม';
    }else{
        results = 'error';
    }


    document.getElementById("bmiInput").value =  bmi.toFixed(2) ;
    document.getElementById("bsa").value =  bsa.toFixed(2) ;

    return "ชื่อ : "+fname+"\nBMI : "+ bmi.toFixed(2) + " BSA : " + bsa.toFixed(2)+"\nภาวะเสี่ยงต่อโรค : "+results;
}

function calculateBmiAlert(){
    weight = weightInput.value;
    stature = statureInput.value;
    calculateBmi(weight,stature);
    // alert(calculateBmi(weight,stature));

}

