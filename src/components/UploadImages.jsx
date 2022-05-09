import React from 'react'

import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import Swal from 'sweetalert2'

const UploadImages = ({ EN }) => {

    const failureCallBack = () => {
        console.log(2)
    }

  return (
    <>
      <WidgetLoader />
      <Widget
        sources={['local', 'camera']} // set the sources available for uploading -> by default
        // all sources are available. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        // and ID's as an object. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={'dxdvzoz9x'} // your cloudinary account cloud name.
        // Located on https://cloudinary.com/console/
        buttonText={'Open'} // default 'Upload Files'
        style={{
              color: 'white',
              border: 'none',
              width: '120px',
              backgroundColor: 'green',
              borderRadius: '4px',
              height: '25px'
            }} // inline styling only or style id='cloudinary_upload_button'
        uploadPreset={'lahuron'}
        cropping={false} // set ability to crop images -> default = true
        // https://support.cloudinary.com/hc/en-us/articles/203062071-How-to-crop-images-via-the-Upload-Widget-#:~:text=Click%20on%20the%20%22Edit%22%20link,OK%22%20and%20Save%20the%20changes.
        // more information here on cropping. Coordinates are returned or upload preset needs changing
        multiple={true} // set to false as default. Allows multiple file uploading
        // will only allow 1 file to be uploaded if cropping set to true
        autoClose={false} // will close the widget after success. Default true
        onSuccess={
            event => {
            console.log(event.info, "info img")
            console.log(event.info.url, "ddassadassda")
            Swal.fire({
                title: 'Hotel Posada Real',
                text: event.info.url,
                icon: 'success',
                confirmButtonText: `<i className="fa fa-arrow-right">${ "🔥 OK" }</i>`
              })
          }} // add success callback -> returns result
        onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
        logging={true} // logs will be provided for success and failure messages,
        // set to false for production -> default = true
        // To use the file name as the public_id use 'use_filename={true}' parameter
        eager={'c_scale,w_800'} // add eager transformations -> deafult = null
        use_filename={true} // tell Cloudinary to use the original name of the uploaded
        // file as its public ID -> default = true,

        widgetStyles={{
          palette: {
            window: '#737373',
            windowBorder: '#FFFFFF',
            tabIcon: '#FF9600',
            menuIcons: '#D7D7D8',
            textDark: '#DEDEDE',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#B3B3B3',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#909090'
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
              active: true
            }
          }
        }} // ability to customise the style of the widget uploader
        destroy={true} // will destroy the widget on completion

        apiKey={655152522617468} // cloudinary API key -> number format
        //accepts={'application/json'} // for signed uploads only -> default = 'application/json'
        //contentType={'application/json'} // for signed uploads only -> default = 'application/json'
        unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make
        // the Public ID unique, and just use the normalized file name -> default = true
      />
    </>
  )
}

export default UploadImages;