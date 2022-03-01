import React, {  } from "react";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import Button from '@mui/material/Button';

function SingleCard( {singleCard}) {

    const doc = new jsPDF();
    const Foo = 
        <div className={singleCard.template.classname}>
            <div className="message_render">
                <div>{singleCard.salutation} {singleCard.receiver},</div>
                <br/>
                <div>{singleCard.message}</div>
                <br/>
                <div>{singleCard.closing}</div>
                <div>-{singleCard.user.first_name}</div> 
            </div>
        </div>
        const save = () => {
        doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
          callback: () => {
            doc.save("myDocument.pdf");
          }
        });
      };

    return (
            <div align='center' style={{paddingTop: 100}}>
                <div className={singleCard.template.classname}>
                    <div className="message_render">
                        <div>{singleCard.salutation} {singleCard.receiver},</div>
                        <br/>
                        <div>{singleCard.message}</div>
                        <br/>
                        <div>{singleCard.closing}</div>
                        <div>-{singleCard.user.first_name}</div> 
                    </div>
                </div>
                <Button variant="outlined" onClick={save}>Download pdf</Button>
            </div>
    )
}

export default SingleCard