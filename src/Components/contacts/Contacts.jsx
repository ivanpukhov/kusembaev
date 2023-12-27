import logo from "../../images/logo.svg";
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import instagram from "../../images/socials/instagram.png";
import facebook from "../../images/socials/facebook.png";
import youtube from "../../images/socials/youtube.png";

const Contacts = () => {
    let contacts = [
        {
            'title': 'Номер телефона',
            'body': '+7 777 777 77 77',
            'link': 'tel:+77777777777',
            'photo': phone
        },
        {
            'title': 'По всем вопросам',
            'body': 'pochta@gmail.com',
            'link': 'mailto:pochta@gmail.com',
            'photo': mail
        },

    ]

    let social = [
        {
            'icon': instagram,
            'link': 'https://instagram.com/'
        },
        {
            'icon': facebook,
            'link': 'https://facebook.com/'
        },
        {
            'icon': youtube,
            'link': 'https://youtube.com/'
        },
    ]
  return(
      <div className="event__contacts">
          <div className="event__logo">
              <img src={logo} alt=""/>
          </div>
          {contacts.map((contact, index) => (
              <div key={index} className="event__contact event__number">
                  <div className="event__before">
                      <img src={contact.photo} alt=""/>
                  </div>
                  <div className="contact__content">
                      <div className="event__title-contact text-orange">
                          {contact.title}
                      </div>
                      <div className="event__contact-item ">
                          <a href={contact.link}>{contact.body}</a>
                      </div>
                  </div>
              </div>
          ))}
          <div className="event__social">
              {social.map((item, index) => (
                  <div key={index} className='event__social-item'>
                      <a href={item.link}>
                          <img src={item.icon} alt=""/>
                      </a>
                  </div>
              ))}
          </div>


      </div>
  )
}

export default Contacts
