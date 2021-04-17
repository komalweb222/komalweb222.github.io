function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // event.preventDefault();
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  const latitudeError = document.getElementById("latitude").parentElement
    .children[0];
  const longitudeError = document.getElementById("longitude").parentElement
    .children[0];

  if (Number.isNaN(Number(latitude)) || latitude > 91 || latitude < -91) {
    event.preventDefault();
    latitudeError.appendChild(
      document.createTextNode(" must be a valid Latitude(-90 to 90)")
    );
  }

  if (Number.isNaN(Number(longitude)) || longitude > 180 || longitude < -180) {
    event.preventDefault();
    longitudeError.appendChild(
      document.createTextNode(" must be a valid Longitude(-180 to 180)")
    );
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
