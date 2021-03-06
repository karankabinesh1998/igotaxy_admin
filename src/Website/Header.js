import React, { Component } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FiMail, FiAlignJustify } from "react-icons/fi";
import { BiFullscreen, BiBell } from "react-icons/bi";
import { ACCESS_POINT } from '../config/index';
import bridge from '../Middleware/bridge';

class Header extends Component {
  constructor(props) {
    super(props)
    {
      this.state =
      {
        Username: '',
        currentDate: '',
        Userdetails: null,
        Image: {
          width: "50%",
          height: "86px",
          marginTop: "3px",
          marginLeft: "-90px"
        }
      }
    }
  }

  async componentDidMount() {
    let data = JSON.parse(localStorage.getItem("Userdetails"));
    const login_token = localStorage.getItem('token');
    const checkLogin = await bridge.getFreedom(
      `login_token`,
      `tbl_login_session`,
      `login_token='${login_token}'`,
      1,
      1
    );
    if(checkLogin.data.length && Array.isArray(checkLogin.data)){
      
      this.setState({ Userdetails: data[0], Username: data[0].username, Profilepic: data[0].profile_dp })
    }else{
      localStorage.removeItem('Userdetails');
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  Logout = async () => {
    const logOut = await bridge.logoutUser();
    if(logOut.data){
    localStorage.removeItem('Userdetails');
    localStorage.removeItem('token');
    window.location.href = '/';
    }
  }

  render() {
    return (
      <React.Fragment>
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar sticky">
          <div class="form-inline mr-auto">
            <ul class="navbar-nav mr-3">
              <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg
									collapse-btn">
                <FiAlignJustify size={24} style={{ color: 'black' }} />
              </a></li>
              <li><a href="#" class="nav-link nav-link-lg fullscreen-btn">
                <BiFullscreen size={24} style={{ color: 'black' }} />
              </a></li>
              <li>
                <form class="form-inline mr-auto">
                  <div class="search-element">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200" />
                    <button class="btn" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav navbar-right">
            {/* <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              class="nav-link nav-link-lg message-toggle">
                <FiMail size={24} style={{color:'black'}}/>
              <span class="badge headerBadge1">
                6 </span> </a>
            <div class="dropdown-menu dropdown-list dropdown-menu-right pullDown">
              <div class="dropdown-header">
                Messages
                <div class="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div class="dropdown-list-content dropdown-list-message">
                <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar
											text-white"> <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle"/>
                  </span> <span class="dropdown-item-desc"> <span class="message-user">John
                      Deo</span>
                    <span class="time messege-text">Please check your mail !!</span>
                    <span class="time">2 Min Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle"/>
                  </span> <span class="dropdown-item-desc"> <span class="message-user">Sarah
                      Smith</span> <span class="time messege-text">Request for leave
                      application</span>
                    <span class="time">5 Min Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-5.png" class="rounded-circle"/>
                  </span> <span class="dropdown-item-desc"> <span class="message-user">Jacob
                      Ryan</span> <span class="time messege-text">Your payment invoice is
                      generated.</span> <span class="time">12 Min Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-4.png" class="rounded-circle"/>
                  </span> <span class="dropdown-item-desc"> <span class="message-user">Lina
                      Smith</span> <span class="time messege-text">hii John, I have upload
                      doc
                      related to task.</span> <span class="time">30
                      Min Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-3.png" class="rounded-circle"/>
                  </span> <span class="dropdown-item-desc"> <span class="message-user">Jalpa
                      Joshi</span> <span class="time messege-text">Please do as specify.
                      Let me
                      know if you have any query.</span> <span class="time">1
                      Days Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle"/>
                  </span> <span class="dropdown-item-desc"> <span class="message-user">Sarah
                      Smith</span> <span class="time messege-text">Client Requirements</span>
                    <span class="time">2 Days Ago</span>
                  </span>
                </a>
              </div>
              <div class="dropdown-footer text-center">
                <a href="#">View All <i class="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              class="nav-link notification-toggle nav-link-lg">
               <BiBell size={24} style={{color:'black'}}/>
            </a>
            <div class="dropdown-menu dropdown-list dropdown-menu-right pullDown">
              <div class="dropdown-header">
                Notifications
                <div class="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div class="dropdown-list-content dropdown-list-icons">
                <a href="#" class="dropdown-item dropdown-item-unread"> <span
                    class="dropdown-item-icon bg-primary text-white"> <i class="fas
												fa-code"></i>
                  </span> <span class="dropdown-item-desc"> Template update is
                    available now! <span class="time">2 Min
                      Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon bg-info text-white"> <i class="far
												fa-user"></i>
                  </span> <span class="dropdown-item-desc"> <b>You</b> and <b>Dedik
                      Sugiharto</b> are now friends <span class="time">10 Hours
                      Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon bg-success text-white"> <i
                      class="fas
												fa-check"></i>
                  </span> <span class="dropdown-item-desc"> <b>Kusnaedi</b> has
                    moved task <b>Fix bug header</b> to <b>Done</b> <span class="time">12
                      Hours
                      Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon bg-danger text-white"> <i
                      class="fas fa-exclamation-triangle"></i>
                  </span> <span class="dropdown-item-desc"> Low disk space. Let's
                    clean it! <span class="time">17 Hours Ago</span>
                  </span>
                </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon bg-info text-white"> <i class="fas
												fa-bell"></i>
                  </span> <span class="dropdown-item-desc"> Welcome to Otika
                    template! <span class="time">Yesterday</span>
                  </span>
                </a>
              </div>
              <div class="dropdown-footer text-center">
                <a href="#">View All <i class="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li> */}
            <li class="dropdown"><a href="#" data-toggle="dropdown"
              class="nav-link dropdown-toggle nav-link-lg nav-link-user"> 
              <img alt="image" src={`${ACCESS_POINT}/admin/filename/${this.state.Profilepic}`}
                class="user-img-radious-style" />
                 <span class="d-sm-none d-lg-inline-block"></span></a>
              <div class="dropdown-menu dropdown-menu-right pullDown">
                <div class="dropdown-title">Hello {this.state.Username}</div>
                <a href="#" class="dropdown-item has-icon"> <i class="far
										fa-user"></i> Profile
                </a> 
                {/* <a href="timeline.html" class="dropdown-item has-icon"> <i class="fas fa-bolt"></i>
                  Activities
                </a> 
                <a href="#" class="dropdown-item has-icon"> <i class="fas fa-cog"></i>
                  Settings
                </a> */}
                <div class="dropdown-divider"></div>
                <a href="#" onClick={this.Logout} class="dropdown-item has-icon text-danger"> <i class="fas fa-sign-out-alt"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>

      </React.Fragment>


    );
  }
}

export default Header;