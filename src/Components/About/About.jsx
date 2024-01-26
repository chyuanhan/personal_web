import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-regular-svg-icons';
import './about.css';

function About() {
  const languages = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Github/Git',
    'Sass',
    'Tailwind CSS',
    'Bootstrap',
    'TypeScript',
    'Java'
  ];

  return (
    <section className='about-section' id='About'>
      <h1 className='title'>
        About<span style={{ color: '#FFBE98' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
            Hey there! I'm a passionate web developer specializing in front-end development. I have a good understanding of front-end development through self-study and I am looking for opportunities to develop as I want to improve my skills in this field.
          </p>
          <br />
          <p>
            Currently, I am actively looking for front-end development job opportunities. If you are interested, I would be happy to get in touch and discuss potential partnership opportunities. I would like to further improve my professional skills.
          </p>
          <br />
          <p>In my personal life, I enjoy collecting various card games, spending time watching shows, and watching a variety of different intellectual films on youtube. </p>
          <br />
          <p>Feel free to reach out if you would like to explore the potential of working together!</p>
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#FFBE98' }} />{' '}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;