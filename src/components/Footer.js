function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center  bg-gray-800 py-10 text-white">
      <div className="flex justify-center space-x-5">
        {/* <div
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </div>
        <div
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </div>
        <div
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </div>
        <div
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </div>
        <div
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </div> */}
      </div>
      <p className="text-center text-white font-medium">
        &copy; {new Date().getFullYear()} All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
