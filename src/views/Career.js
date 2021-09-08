import React from 'react'
// import './Career.css'
import { Element } from 'react-scroll'
import emailjs from 'emailjs-com'
export default function Career(){
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_xr3373w','template_96ewih7', e.target, 'user_sAMWcxOdkvG0hIl6eXT76')
        .then((result) => {
            console.log(result.text);
            alert('your message sent successfully')
        }, (error) => {
            console.log(error.text);
            alert('Error in sending message')
        });
        e.target.reset()
  }
    return (
        <div className="career-page-background">
        <div className="wrapper">
            <div class="career-page">
             <div className="career-form-heading">
                <h1>Career in Virtuoso</h1>
            </div>

            <Element className="career" id="careers">
            <div className="career-form">
            <div className="career-form-content">

            <form  enctype="multipart/form-data" method="post" onSubmit={sendEmail} class="row g-3 needs-validation" novalidate>
                <h1>Apply Here</h1>
               <label>Upload CV <br/></label> <input name="cv"type="file"></input>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control1" name="fname"id="validationTooltip01" Placeholder="First name" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <input type="text" class="form-control1" name="mname"id="validationTooltip02" placeholder="Middle Name"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control1" name="lname"id="validationTooltip01" Placeholder="Last name" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">

    <input type="tel" class="form-control1" name="ph"id="validationTooltip02" placeholder="Mobile"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">

    <input type="email" class="form-control1" name="mail"id="validationTooltip02" placeholder="Email Id" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">
   
   <input type="text" class="form-control1"name="country" id="validationTooltip03" placeholder="Country" required/>
   <div class="invalid-tooltip">
     Please provide a valid city.
   </div>
 </div>


 <div class="col-md-4 position-relative">

<input type="text" class="form-control1"name="state" id="validationTooltip02" placeholder="State"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>

  <div class="col-md-4 position-relative">
   
    <input type="text" class="form-control1" name="city"id="validationTooltip03" placeholder="City" required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>

  
   <div class="col-md-3 position-relative">
 
 <input type="text" class="form-control1"name="zip" placeholder="Zip" id="validationTooltip05" required/>
 <div class="invalid-tooltip">
   Please provide a valid zip.
 </div>
</div>






<div class="col-md-4 position-relative">

<input type="text" class="form-control1"name="graduation" id="validationTooltip02" placeholder="Graduation (eg : BE/B.Tech)"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="gpercent"id="validationTooltip02" placeholder="Percentage/CGPA"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="gyop"id="validationTooltip02" placeholder="Year of Passing"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>





<div class="col-md-4 position-relative">

<input type="text" class="form-control1"name="hsc" id="validationTooltip02" placeholder="HSC"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="hpercent"id="validationTooltip02" placeholder="Percentage/CGPA"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="hyop"id="validationTooltip02" placeholder="Year of Passing"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>







<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="sslc"id="validationTooltip02" placeholder="SSLC"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="spercent"id="validationTooltip02" placeholder="Percentage/CGPA"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" name="syop"id="validationTooltip02" placeholder="Year of Passing"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>

<div class="col-md-4 position-relative ">
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></div>

<label>Upload Recent Passport  size photo <br/></label> <input name="photo"type="file"></input>







  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
            </div>
            </div></Element>
        </div></div></div>
    )
}

