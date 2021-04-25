//Header

// h1 = document.createElement("h1");
// text_h1 = document.createTextNode("prueba script");

// h1.appendChild(text_h1);
// document.body.appendChild(h1);

function body(variable) {

  document.getElementsByTagName("body")[0].appendChild(variable);

}

function header() {
  var div = document.createElement("div");
  div.className = "container";

  var img = document.createElement("img");
  img.className = "d-block mx-auto mb-4 mt-5 ";
  img.src = './asset/img/bootstrap-solid.svg'
  img.width = 75;
  img.height = 75;

  var h1 = document.createElement("h1")
  h1.className = "text-center"
  var text_h1 = document.createTextNode("Checkout form ")

  var h2 = document.createElement("h4");
  h2.className = "text-center lead";
  var text_h2 = document.createTextNode("Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.")

  div.appendChild(img);
  h1.appendChild(text_h1);
  div.appendChild(h1);
  h2.appendChild(text_h2);
  div.appendChild(h2);

  body(div)

}

header()


function content() {
  var div_form = document.createElement("div")
  div_form.className = "container d-flex justify-content-end pt-5 "
  body(div_form)

  var div = document.createElement("div");
  div.className = " col-md-4 order-md-2 mb-2"

  var h4 = document.createElement("h4");
  h4.className = "d-flex justify-content-between align-items-center mb-2"

  var span_1 = document.createElement("span")
  span_1.className = "d-flex text-muted"
  var text_span1 = document.createTextNode("Your cart")


  var span_2 = document.createElement("span")
  span_2.className = "badge badge-secondary badge-pill d-flex"
  var text_span2 = document.createTextNode("3")

  //ul

  function li(text_product, value) {
    var ul = document.createElement("ul");
    ul.className = "list-group mb-3";

    var li = document.createElement("li");
    li.className = "list-group-item lh-condensed mt-auto p-2 bd-highlight "

    var div_li = document.createElement("div");
    var h6 = document.createElement("h6");
    h6.className = " my-0";
    text_h6 = document.createTextNode(text_product);
    h6.appendChild(text_h6);

    var small = document.createElement("small")
    small.className = " text-muted";
    var text_small = document.createTextNode("Brief description");
    small.appendChild(text_small);

    var span = document.createElement("span");
    span.className = " text-muted pl-4"
    text_span = document.createTextNode("$" + value);
    span.appendChild(text_span)


    div_form.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(div_li);
    div_li.appendChild(h6);
    div_li.appendChild(small);
    div_li.appendChild(span);

  }
  li("Product name", 12)
  li("Second Product", 8)
  li("Third item", 5)
  li("Promocode", -5)
  li("Total (USD", 20)


  div_form.appendChild(div);
  div.appendChild(h4);
  h4.appendChild(span_1);
  h4.appendChild(span_2);
  span_1.appendChild(text_span1);
  span_2.appendChild(text_span2);


}

content()


function form2() {

  var div_header = document.createElement("div")
  div_header.className = "container"
  body(div_header)

  var div_form1 = document.createElement("div")

  var h4 = document.createElement("h4");
  var text_h4 = document.createTextNode("Billing address")
  h4.appendChild(text_h4);

  div_header.appendChild(div_form1)
  div_form1.appendChild(h4);
  // input 


  function input(name, className, place_holder = "") {
    var h6 = document.createElement("h6")
    var text_h6 = document.createTextNode(name)
    h6.appendChild(text_h6)


    var input_form1 = document.createElement("input");
    input_form1.className = className
    input_form1.placeholder = place_holder


    div_header.appendChild(h6)
    div_header.appendChild(input_form1)
  }

  input("First name", "form-control col-md-4 mb-2")
  input("Last name", "form-control col-md-4 mb-2")
  input("Username", "form-control col-md-8 input-group-text mb-2", "Username")
  input("Email (Optional)", "form-control col-md-8 mb-2", "you@example.com")
  input("Adress", "form-control col-md-8 mb-2", "1234 Main St")
  input("Adress 2 (optional)", "form-control col-md-8 mb-2", "Apartment or suite")
  input("Country", "custom-select d-block w-100 col-md-4 mb-2", "Choose..")
  input("State", "custom-select d-block w-100 col-md-4 mb-2", "Choose..")
  input("Zip", "form-control col-md-1 mb-2")

  var hr = document.createElement("hr");
  hr.className = "col-md-4"
  div_header.appendChild(hr)

  //checkbox

  function checkbox(text_node) {


    var div = document.createElement("div")
    div.className = "custom-control custom-checkbox"

    var input2 = document.createElement("input")
    input2.type = "checkbox"
    input2.className = "custom-control-input"


    var h6 = document.createElement("h6")
    var text_h6 = document.createTextNode(text_node)
    h6.appendChild(text_h6)

    var label = document.createElement("label")
    label.className = "custom-control-label "

    div.appendChild(h6)
    div.appendChild(input2)
    div.appendChild(label)
    div_header.appendChild(div)

  }

  checkbox("Shipping address is the same as my billing address")
  checkbox("Save this information for next time")

  var hr = document.createElement("hr");
  hr.className = "col-md-4"
  div_header.appendChild(hr)


}
form2()

function Payment(params) {


  var div_payment = document.createElement("div")
  div_payment.className = "container"
  body(div_payment)

  var div_form1 = document.createElement("div")

  var h4 = document.createElement("h4");
  var text_h4 = document.createTextNode("Payment")
  h4.appendChild(text_h4);

  div_payment.appendChild(div_form1)
  div_form1.appendChild(h4);
}
Payment()

function checkRadio(text_node) {

  var div = document.createElement("div")
  div.className = "container custom-control custom-radio mt-3";
  body(div)

  var input_radio = document.createElement("input")
  input_radio.type = "radio";
  input_radio.name = "paymentMethod";
  input_radio.className = "custom-control-input";



  var h6 = document.createElement("h6")
  var text_h6 = document.createTextNode(text_node);
  h6.appendChild(text_h6);


  div.appendChild(input_radio);
  div.appendChild(h6);

}
checkRadio("Credit Card")
checkRadio("Debit Card")
checkRadio("PayPal")

function dataCard(name, className, place_holder = "") {
  
  var div = document.createElement("div")
  div.className = "container pt-4 "
  body(div)

  var h6 = document.createElement("h6")
  var text_h6 = document.createTextNode(name)
  h6.appendChild(text_h6)


  var input_form1 = document.createElement("input");
  input_form1.className = className
  input_form1.placeholder = place_holder


  div.appendChild(h6)
  div.appendChild(input_form1)
}

dataCard("Name on card", "form-control col-md-4 mb-2")
dataCard("Credit car Number", "form-control col-md-4 mb-2")
dataCard("Expiration", "form-control col-md-2 mb-2")
dataCard("CVV", "form-control col-md-2 mb-2")

var hr = document.createElement("hr");
  hr.className = "container"
body(hr)

function button() {
  var div = document.createElement("div");
  body(div)

  var button = document.createElement("button");
  button.className = "btn btn-primary btn-block w-50 container "
  button.type = "submit"
  button.style.height = "50px"
  
  var text_button = document.createTextNode("Continue to checkout")
  button.appendChild(text_button)
  div.appendChild(button)
}
button()

function footer_link(texto) {
  var li = document.createElement('li');
  li.className = 'list-inline-item';
  var a = document.createElement('a');
  a.href = '#';
  a.appendChild(document.createTextNode(texto));
  li.appendChild(a);

  return li;
}


function footer() {
  var footer = document.createElement('footer');
  footer.className = 'my-5 pt-5 text-muted text-center text-small';
  body(footer)

  var p = document.createElement('p');
  p.className = 'mb-1';
  p.appendChild(document.createTextNode('2017-2019 Company Name'));
  footer.appendChild(p);

  var ul = document.createElement('ul');
  ul.className = 'list-inline';
  ul.appendChild(footer_link('Privacy'));
  ul.appendChild(footer_link('Terms'));
  ul.appendChild(footer_link('Support'));
  footer.appendChild(ul);
  

}

footer()




