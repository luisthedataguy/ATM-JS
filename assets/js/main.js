let totalAmount = 200;
let totalAmoun2 = 400;
let totalAmoun3 = 600;

let withdarawalBtn = document.getElementById("withdarawal");
let billPay = document.getElementById("billPay");
let ballanceInquiryBtn = document.getElementById("ballanceInquiry");
let ref = document.getElementById("ref");
let btnReff = document.getElementById("btnReff");

let transferBtn = document.getElementById("transfer");
let depositBtn = document.getElementById("deposit");
let otherTransaction = document.getElementById("otherTransaction");
let firstText = document.getElementById("firstText");
let firstText2 = document.getElementById("firstText2");
let Exit = document.getElementById("Exit");
let btnOK = document.getElementById("btnOK");
let btnOK2 = document.getElementById("btnOK2");
let amounts = document.getElementById("amounts");
let secondText = document.getElementById("secondText");
let secondText2 = document.getElementById("secondText2");
let amount = document.getElementById("amount");
let amount2 = document.getElementById("amount2");
let doubleTransactions = document.getElementById("doubleTransactions");
let amountIn = document.getElementById("amountIn").value;
let back = document.getElementById("back");
let lin1 = document.getElementById("lin1");
let lin2 = document.getElementById("lin2");
let transactions = document.getElementById("transactions");
let btnsSecreen = document.getElementById("btnsSecreen");
let pin1 = document.getElementById("pin1").value;
let btnEnter = document.getElementById("btnEnter");
let pas = document.getElementById("pas");
let num = document.getElementById("num");
let pinMsg = document.getElementById("pinMsg");
let billPayDiv = document.getElementById("billPayDiv");
let pinDiv = document.getElementById("pinDiv");
let pinHeading = document.getElementById("pinHeading");

btnOK.onclick = OK;
function OK() {
  let amountIn = document.getElementById("amountIn").value;
  if (Number(amountIn) - totalAmount <= 10) {
    secondText.innerHTML = "No tienes suficiente crédito";
    secondText.innerHTML = "No se puede tener menos de $10 pesos";
    amount.innerHTML = "Su saldo total es $" + totalAmount;
    back.innerHTML = "Regresar al Menù principal";
  } else if (Number(amountIn) + totalAmount >= 990) {
    secondText.innerHTML = "No tienes suficiente crédito";
    secondText.innerHTML = "No se puede tener más de $990";
    amount.innerHTML = "Su saldo total es $" + totalAmount;
    back.innerHTML = "Regresar al Menù principal";
  } else {
    secondText.innerHTML = "Transacción exitosa $" + Number(amountIn);
    amount.innerHTML =
      "Transacción exitosa $" + (totalAmount - Number(amountIn));
    back.innerHTML = "Regresar al Menù principal";
  }
}
withdarawalBtn.onclick = withdarawal;
function withdarawal() {
  btnsSecreen.style.display = "none";
  transactions.style.display = "block";
  firstText.innerHTML = "Please Enter Your Amount ";

  btnOK.onclick = function () {
    let amountRet = document.getElementById("amountIn").value;

    // secondText.innerHTML = "No tienes suficiente crédito";
    if (totalAmount - Number(amountRet) < 10) {
      // secondText.innerHTML = "No tienes suficiente crédito";
      secondText.innerHTML = "No se puede tener menos de $10 en la cuenta";
      amount.innerHTML = "Su saldo total es $" + totalAmount;
      back.innerHTML = "Regresar al Menù principal";
      console.log(amountDep);
    } else {
      secondText.innerHTML = "Transacción exitosa $" + Number(amountRet);
      amount.innerHTML =
        "Su saldo actual es $" + (totalAmount - Number(amountRet));
      back.innerHTML = "Regresar al Menù principal";
    }
  };
}

// btnOK.onclick = OK;
// function OK() {
//   let amountIn = document.getElementById("amountIn").value;
//   if (amountIn < totalAmount) {
//     secondText.innerHTML = "Transaction Succesed $" + amountIn;
//     amount.innerHTML = "Remaining amount is $" + (totalAmount - amountIn);
//     back.innerHTML = "Back to main secreen";
//   } else {
//     secondText.innerHTML = "You have't enough credit";
//     amount.innerHTML = "Your total ballance is $" + totalAmount;
//     back.innerHTML = "Back to main secreen";
//   }
// }
// btnOK2.onclick = OK2;
// function OK2() {
//   let amountIn2 = document.getElementById("amountIn2").value;
//   if (amountIn2 < totalAmount) {
//     secondText2.innerHTML = "Transaction Succesed $" + amountIn2;
//     amount2.innerHTML = "Remaining amount is $" + (totalAmount - amountIn2);
//     back.innerHTML = "Back to main secreen";
//   } else {
//     secondText2.innerHTML = "You have't enough credit";
//     amount2.innerHTML = "Your total ballance is $" + totalAmount;
//     back.innerHTML = "Back to main secreen";
//   }
// }

lin2.onclick = Back;
function Back() {
  billPayDiv.style.display = "none";
  billPayDiv.style.display = "none";
  btnsSecreen.style.display = "block";
}

lin1.onclick = Back;
function Back() {
  billPayDiv.style.display = "none";
  // billPayDiv.style.display = "none";
  btnsSecreen.style.display = "block";
  transactions.style.display = "none";
}

billIn.onclick = Trans;
function Trans() {
  // billPayDiv.style.display = "none";
  billPayDiv.style.display = "none";
  btnsSecreen.style.display = "block";
  transactions.style.display = "none";
  btnReff.style.display = "none";
}

btnEnter.onclick = login;
function login() {
  let pin1 = document.getElementById("pin1").value;

  if (pin1 == 1234) {
    pas.style.display = "none";
    btnsSecreen.style.display = "block";
  } else {
    pinMsg.innerHTML = "**Password no coincide";
  }
}

billPay.onclick = billPayment;
function billPayment() {
  firstText2.innerHTML = "Ingresa tu No. Factura";
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "block";
}

btnReff.onclick = change;
function change() {
  ref.style.display = "none";
  billPay.style.display = "block";
  billPayDiv.style.display = "block";
  firstText2.innerHTML = "Ingresa tu factura total";
}

ballanceInquiryBtn.onclick = billInquiry;
function billInquiry() {
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "none";
  transactions.style.display = "block";
  ref.style.display = "none";
  amounts.style.display = "none";
  firstText.innerHTML = "Consulta de saldo";
  secondText.innerHTML = "El saldo total la cuenta es $" + totalAmount;
}
transferBtn.onclick = transferMoney;
function transferMoney() {
  transactions.style.display = "block";
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "none";
  firstText.innerHTML = "Ingresa la cantidad";
  btnOK.onclick = function () {
    // let totalAmount = 200;
    let amountTrans = document.getElementById("amountIn").value;
    // secondText.innerHTML = "No tienes suficiente crédito";
    if (Number(amountTrans) - totalAmount >= 10) {
      // secondText.innerHTML = "No tienes suficiente crédito";
      secondText.innerHTML = "No se puede tener menos de $10 en la cuenta";
      amount.innerHTML = "Su saldo total es $" + totalAmount;
      back.innerHTML = "Regresar al Menù principal";
      console.log(amountTrans);
    } else {
      secondText.innerHTML = "Transacción exitosa $" + Number(amountTrans);
      amount.innerHTML =
        "Su saldo actual es $" + (totalAmount - Number(amountTrans));
      back.innerHTML = "Regresar al Menù principal";
    }
  };
}
depositBtn.onclick = depositMoney;
function depositMoney() {
  transactions.style.display = "block";
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "none";
  firstText.innerHTML = "Ingresa la cantidad";
  btnOK.onclick = function () {
    // let totalAmount = 200;
    let amountDep = document.getElementById("amountIn").value;

    // secondText.innerHTML = "No tienes suficiente crédito";
    if (Number(amountDep) + totalAmount >= 990) {
      // secondText.innerHTML = "No tienes suficiente crédito";
      secondText.innerHTML = "No se puede tener más de $990 en la cuenta";
      amount.innerHTML = "Su saldo total es $" + totalAmount;
      back.innerHTML = "Regresar al Menù principal";
      console.log(amountDep);
    } else {
      secondText.innerHTML = "Transacción exitosa $" + Number(amountDep);
      amount.innerHTML =
        "Transacción exitosa $" + (totalAmount + Number(amountDep));
      back.innerHTML = "Regresar al Menù principal";
    }
    // secondText.innerHTML = "Succesfully Added $" + pin1;
    // amount.innerHTML = "Your new ballance is $" + (totalAmount + Number(pin1));
  };

  Exit.onclick = exit;
  function exit() {
    transactions.style.display = "none";
    billPayDiv.style.display = "none";
    btnsSecreen.style.display = "none";
    pas.style.display = "block";
    pinDiv.style.display = "none";
    pinHeading.innerHTML = "Gracias por confiar en nosotros :)";
    pinMsg.innerHTML = "¡No comprometemos la seguridad del cliente!";
  }

  back.onclick = back;
  function back() {
    location.reload();
    pas.style.display = "block";
    transactions.style.display = "none";
    billPayDiv.style.display = "none";
    btnsSecreen.style.display = "none";
  }
}
