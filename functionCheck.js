// hien thi day so 100
function Unit1() {
    let text = "";
    for (let i = 0; i <= 100; i++) {
        text = text + " ; " + i;
        if (i == 99) {
            alert("complete" + i);
        }
        document.getElementById("unit12").innerHTML = text.substring(2);
    }
}

// tang giam nhie do pham vi 100 và 20
function Unit2() {
    let tep;
    do {
        tep = +prompt("InputTep");
        if (tep > 100) {
            alert("reduce the temperature")
        } else if (tep < 20) {
            alert("increased temperature")
        }
    } while (tep >= 100 || tep <= 20)
    document.getElementById("unit2-1").value = tep;
    document.getElementById("unit2").innerHTML = "Temperature is: " + tep;
}

//Hien thi N so trong day
function Unit3() {
    let Number = +document.getElementById("Number1").value;
    // alert(Number);
    let a = 1, b = 0, temp, text = "";
    while (Number > 0) {
        temp = a;
        a = a + b;
        b = temp;
        text = text + "; " + a;
        Number--;
    }
    document.getElementById("Output").innerHTML = text.substring(2);
}

// Tim so dau tien chia het cho N trong day bolonaci
function Unit4() {
    let num = +document.getElementById("int1").value;
    let a = 1, b = 0, tem = 0;
    while (a % num != 0) {
        tem = a;
        a = a + b;
        b = tem;
        let text = a;
    }
    document.getElementById("output4").innerHTML = text;
}

// fibolaci; tong N so dau tien trng day
function Unit5() {
    let num = +document.getElementById("int5").value;
    let a = 1, b = 0, tem = 0, sum = "";
    // alert(num);
    // alert(num>0);
    while (num > 0) {
        tem = a;
        a = a + b;
        b = tem;
        sum = +a;
        // alert(a+"a");
        // alert("sum: "+sum);
        num--;
    }
    document.getElementById("output5").innerHTML = sum;
}

// bai toan: nhap số tự nhiên là số cần chia hết, input 2 số lượng cần tìm để tính tổng
function Unit6() {
    let num = +document.getElementById("int6").value;
    let cot = +document.getElementById("int6_1").value;
    if (cot <= 0 || num <= 0) {
        alert("input wrong, cot>0, ")
    }
    let sum = 0;
    for (let i = 1; i < cot + 1; i++) {
        sum = sum + num * i;
    }
    document.getElementById("output6").innerHTML = sum;
}

// bai toan: Input Number display 0 to N, if: Number%3==0 print Fizz, Number%5==0 print: Buzz, Number%3 and Number%5==0 FizzBuzz.
function Unit7() {
    let text = "";
    let num = +document.getElementById("int7").value;
    for (let i = 1; i <= num; i++) {
        let sur3 = i % 3;
        let sur5 = i % 5;
        if (sur3 == 0) {
            if (sur5 == 0) {
                text = text + " FizzBuzz"
            } else {
                text = text + " Fizz"
            }
        } else if (sur5 == 0) {
            text = text + " Buzz"
        } else {
            text = text + " " + i;
        }
    }
    document.getElementById("output7").innerHTML = text;
}

// bai toan random
function Unit8() {
    alert("Nhap khoang muon doan");
    let f,t=0;   // khoang du doan
    let text=""; // so da doan
    // ham nhap khoang du doan
    do {
         f = +prompt("From");
         t = +prompt("To");
    } while (f>t)
    // ham random
    let ra = Math.floor(Math.random() * (t - f + 1)) + f;
    document.getElementById("Ft").innerHTML = "Khoang ban doan tu " + f + " den " + t;
    // nhap so doan den khi nao dung thi thoi
    let num,count = 0;
    do {
        num = +prompt("So ban doan");
        text=text+" "+num;
        if(num>ra){
            alert("Greater than");
        }else if (num<ra){
            alert("less than");
        }
        count++;
    } while (num != ra)
    document.getElementById("output8").innerHTML="Ban da doan dung sau "+count;
    document.getElementById("int8").innerHTML=text;
    document.getElementById("ra8").innerHTML="Số trúng thưởng: "+ra;
}