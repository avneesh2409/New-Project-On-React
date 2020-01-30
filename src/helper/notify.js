  import React from 'react';
  import {
      toast
  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const Msg = (props) => {
      return ( <
          div > {
              props.message
          } < /div>
      )

  }

  export const notify = (message, type) => {
      toast( < Msg message = {
              message
          }
          />,{
          position: toast.POSITION.TOP_RIGHT,
          className: (type === 'success') ? 'text-success' : (type === 'warning') ? 'text-warning' : 'text-danger'
      });
  }