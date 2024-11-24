import { Button } from 'flowbite-react';

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 justify-center flex flex-col ">
        <h2 className="text-2xl">Want to know more?</h2>
        <p className="text-gray-600 my-2">Follow me...</p>
      </div>
      <div className="px-7 py-0 flex gap-2 justify-center flex-wrap">
        <a
          href="https://www.facebook.com/profile.php?id=100001281440746"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none rounded-tr-none"
          >
            on facebook
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/lysenko-denys/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none rounded-tr-none"
          >
            on LinkedIn
          </Button>
        </a>
        <a
          href="https://github.com/LysenkoDenys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none rounded-tr-none"
          >
            on GitHub
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
