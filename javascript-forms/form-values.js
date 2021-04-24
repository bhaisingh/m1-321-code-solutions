var $form = document.querySelector('#contact-form');
var formObject = {};

$form.addEventListener('submit', function () {
  event.preventDefault();
  var $name = $form.elements.name.value;
  var $email = $form.elements.email.value;
  var $message = $form.elements.message.value;
  formObject.name = $name;
  formObject.email = $email;
  formObject.message = $message;
  console.log('message Data: ', formObject);
  $form.reset();
});
