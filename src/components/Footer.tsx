const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">
            © {currentYear} Arbaz Khan. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/70">
            Built with passion for creating exceptional web experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
