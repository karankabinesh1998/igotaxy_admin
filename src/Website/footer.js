import React from 'react';
// import { CardFooter } from 'reactstrap';
// import { AiFillCaretUp } from "react-icons/ai";

class Footer extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                Year:'',

            }
        }
    }


    async componentDidMount(){
        let Y = new Date()
        this.setState({Year:Y.getFullYear()})
    }

    

        render()
    {
       
       return(
         <React.Fragment>
           <footer class="main-footer">
        <div class="footer-left">
          <a href="#">&copy; {this.state.Year} igoTaxy.com</a>
        </div>
        <div class="footer-right">
        </div>
      </footer>
         </React.Fragment>
       )
    }
}

export default Footer;
