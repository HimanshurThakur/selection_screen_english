import React from 'react'
import './Css/pdfpage.css'
import jsPDF from "jspdf"
export default function PdfPage(props) {


  function generatePdf() {

    var doc = new jsPDF('p', 'pt', 'a4')

    doc.html(document.querySelector("#id"), {
      'width': "200",
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
            <td>Registration Number : </td>
            <td colspan="7">Date Of Registration :</td>
          </tr>
          <tr>
            <td>1.2</td>
            <td>Name Of Farmer : </td>
            <td colspan="7">Aadhar No : </td>
          </tr>
          <tr>
            <td>1.3</td>
            <td>Father's/Husband Name : </td>
            <td colspan="7">Mother's Name : </td>
          </tr>
          <tr>
            <td>1.4</td>
            <td>Date of Birth : </td>
            <td colspan="2">Sex :</td>
            <td colspan="3">Male </td>
            <td colspan="3">Female </td>
          </tr>
          <tr>
            <td>1.5</td>
            <td>Village/Ward : </td>
            <td colspan="7">Post : </td>
          </tr>
          <tr>
            <td>1.6</td>
            <td>Tehsil : </td>
            <td colspan="7">District : </td>
          </tr>
          <tr>
            <td>1.7</td>
            <td>State : </td>
            <td>Pin Code : </td>
            <td style={{ width: "2px" }}>4</td>
            <td style={{ width: "2px" }}>8</td>
            <td>1</td>
            <td>7</td>
            <td>7</td>
            <td>6</td>
          </tr>
          <tr>
            <td>1.8</td>
            <td>Mobile No.  </td>
            <td colspan="8">Education Status : </td>
          </tr>
          <tr>
            <td>1.9</td>
            <td>Total Land Holding(Ha) :</td>
            <td colspan="7">Gps Reading : Latitude N  <br />Longitude E    <br />Khasra No :   </td>
          </tr>
          <tr>
            <td>1.10</td>
            <td>Land Offered for Organic (Ha) : </td>
            <td colspan="7">No. Of Site : </td>
          </tr>
          <tr>
            <th>2.</th>
            <th colspan="8">CERTIFICATION INFORMATION</th>
          </tr>
          <tr>
            <td>2.1</td>
            <td colspan="8">Last Date Of Used prohibited Substance: </td>
          </tr>
          <tr>
            <td>2.2</td>
            <td  >Organic Standards</td>
            <td>India-NPOP<input type="checkbox" /></td>
            <td colspan="2">EU-834/2007 <input type="checkbox" /></td>
            <td colspan="2">USDA-NOP <input type="checkbox" /></td>
            <td colspan="2">COR <input type="checkbox" /></td>
          </tr>
          <tr>
            <td rowspan="4">2.3</td>
            <td colspan="8">Activities Offered for Certification : </td>
          </tr>
          <tr>
            <td>Crop Cultivation <input type="checkbox" /></td>
            <td colspan="3">Orchard-Fruits <input type="checkbox" /></td>
            <td colspan="2">Vegetables <input type="checkbox" /></td>
            <td colspan="2">Control climate Production <input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Fooder <input type="checkbox" /></td>
            <td colspan="3">Plantation <input type="checkbox" /></td>
            <td colspan="2">Medicinal <input type="checkbox" /></td>
            <td colspan="2">wild craft <input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Bee Keeping <input type="checkbox" /></td>
            <td colspan="3">Primary Processing <input type="checkbox" /></td>
            <td colspan="2">Animal Husbandry <input type="checkbox" /></td>
            <td colspan="2">Animal Husbandary-dairy <input type="checkbox" /></td>
          </tr>
          <tr>
            <th>3.</th>
            <th colspan="8">DETAILS OF ANIMAL HUSBANDRY :</th>
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
            <th colspan="8">DECLARATION BY THE APPLICANT:</th>
          </tr>
          <tr>
            <td> </td>
            <td colspan="8">I have filled Registration Form to the best of my Knowledge. I request you to register
              me for the registration under Group for Organic Certification of our operation as per details given in
              the Registration Form.
              <br /><br />Date:<span className='signature'> Signature</span>
            </td>
          </tr>
          <tr>
            <th>5.</th>
            <th colspan="8">COMMENTS FROM THE PERSON ASSISTING APPLICANT:</th>
          </tr>
          <tr>
            <td rowspan='3'></td>
            <td colspan="8">Name :</td>
          </tr>
          <tr>
            <td colspan="8">Comments :</td>
          </tr>
          <tr>
            <td colspan="8">Date:<span className='signature'> Signature</span></td>
          </tr>
        </table>
      </div>

      <button onClick={generatePdf}>generate pdf</button>

    </>
  )
}

