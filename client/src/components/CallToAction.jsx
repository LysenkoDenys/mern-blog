import { Button } from 'flowbite-react';

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to know more?</h2>
        <p className="text-gray-500 my-2">Follow me...</p>
        <a
          href="https://www.facebook.com/profile.php?id=100001281440746"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            on facebook
          </Button>
        </a>
      </div>
      <div className="px-7 py-0 flex-1">
        <a
          href="https://www.linkedin.com/in/lysenko-denys/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPG7vBQf4neLC5Lsd9hILi5XXjn6-Gdfwfw&s"
            alt="CallToAction"
          />
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
