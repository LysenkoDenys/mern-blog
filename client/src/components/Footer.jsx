import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin, BsDribbble } from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500 py-3">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Denys Lysenko`s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://cv-lysenko.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my CV
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Denys Lysenko`s blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/LysenkoDenys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.facebook.com/profile.php?id=100001281440746"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-conditions"> Terms &amp; Conditions</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Lysenko`s blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100001281440746"
              icon={BsFacebook}
              aria-label="Author`s facebook page"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://github.com/LysenkoDenys"
              icon={BsGithub}
              aria-label="Author`s gitHub page"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/lysenko-denys"
              icon={BsLinkedin}
              aria-label="Author`s Linkedin page"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://dribbble.com/Denys_Lysenko"
              icon={BsDribbble}
              aria-label="Author`s dribble page"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
