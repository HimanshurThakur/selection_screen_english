import React from 'react'
import './Css/pdfpage.css'
import jsPDF from "jspdf"
export default function PdfPage(props) {


  function generatePdf() {

    var doc = new jsPDF('p', 'pt', 'a4')

    doc.html(document.querySelector("#id"), {
      callback: function () {
        doc.save("download.pdf")
      }
    })

  }
  return (
    <>
      <div id='id'>
        <div className='heading'>
          <h3>M.R MORARKA GDC RURAL RESEARCH FOUNDATION </h3>
          <h4 style={{ marginTop: "0.5px" }}>Vatika Road , Off Tonk Road , Jaipur 302022</h4>
          <h3 style={{ marginTop: "0.5px" }}>FARMER REGISTRATION FORM</h3>
        </div>

        <table>
          <tr>
            <th>1.</th>
            <th colspan="8">CONTACT INFORMATION</th>
          </tr>
          <tr>
            <td>1.1</td>
            <td>Registration Number / मानव  : 12345678</td>
            <td colspan="7">Date Of Registration :25/12/2022</td>
          </tr>
          <tr>
            <td>1.2</td>
            <td>Name Of Farmer : {props.name}</td>
            <td colspan="7">Aadhar No : 709471704980</td>
          </tr>
          <tr>
            <td>1.3</td>
            <td>Father's/Husband Name : Himanshu Kurmar Thakur</td>
            <td colspan="7">Mother's Name : Smt. Madhuri Thakur</td>
          </tr>
          <tr>
            <td>1.4</td>
            <td>Date of Birth : 19/10/1997</td>
            <td colspan="2">Sex :</td>
            <td colspan="3">Male</td>
            <td colspan="3">Female</td>
          </tr>
          <tr>
            <td>1.5</td>
            <td>Village/Ward : Nainpur</td>
            <td colspan="7">Post : Jamgaon</td>
          </tr>
          <tr>
            <td>1.6</td>
            <td>Tehsil : Nainpur</td>
            <td colspan="7">District :</td>
          </tr>
          <tr>
            <td>1.7</td>
            <td>State :Madhya Pradesh </td>
            <td>Pin Code :481776</td>
            <td>4</td>
            <td>1</td>
            <td>7</td>
            <td>7</td>
            <td>6</td>

          </tr>
          <tr>
            <td>1.8</td>
            <td>Mobile No. 6261626357 </td>
            <td colspan="7">Education Status : Graduation</td>
          </tr>
          <tr>
            <td>1.9</td>
            <td>Total Land Holding(Ha) :20</td>
            <td colspan="7">Gps Reading : Latitude N <br />Longitude E <br />Khasra No :</td>
          </tr>
          <tr>
            <td>1.10</td>
            <td>Land Offered for Organic (Ha) : 25</td>
            <td colspan="7">No. Of Site :564</td>
          </tr>
          <tr>
            <th>2.</th>
            <th colspan="7">CERTIFICATION INFORMATION</th>
          </tr>
          <tr>
            <td>2.1</td>
            <td colspan="8">Last Date Of Used prohibited Substance: 25/12/2022</td>
          </tr>
          <tr>
            <td>2.2</td>
            <td>Organic Standards</td>
            <td>India-NPOP</td>
            <td>EU-834/2007</td>
            <td>USDA-NOP</td>
            <td colspan="4">COR</td>
          </tr>
          <tr>
            <th>3.</th>
            <th colspan="7">DETAILS OF ANIMAL HUSBANDRY :</th>
          </tr>

          <tr>
            <th>S. No.</th>
            <th>TYPE of Livestock</th>
            <th>Breed</th>
            <th>No. of Livestock</th>
            <th>Purpose</th>
            <th colspan="4">Total Milk Production Per Day</th>
          </tr>

          <tr>
            <td>1</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td>2</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td>3</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td>4</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>

          <tr>
            <th>4.</th>
            <th colspan="7">DECLARATION BY THE APPLICANT:</th>
          </tr>
          <tr>
            <td> </td>
            <td colspan="8">I have filled Registration Form to the best of my Knowledge. I request you to register
              me for the registration under Group for Organic Certification of our operation as per details given in
              the Registration Form.
              <br /><br />Date:<span> Signature of Farmer</span>
            </td>
          </tr>

          <tr>
            <th>5.</th>
            <th colspan="7">COMMENTS FROM THE PERSON ASSISTING APPLICANT:</th>
          </tr>

          <tr>
            <td rowspan='3'></td>
            <td colspan="8">Name :</td>

          </tr>
          <tr>
            <td colspan="8">Comments :</td>
          </tr>
          <tr>
            <td colspan="8">Date :</td>
          </tr>


        </table>
      </div>

      <button onClick={generatePdf}>generate pdf</button>

    </>
  )
}

