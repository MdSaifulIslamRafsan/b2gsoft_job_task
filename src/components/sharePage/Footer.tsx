import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white">
    <div className="container mx-auto pt-20 pb-10 px-4 lg:px-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              width={180}
              height={100}
              src="/assets/logo.png" 
              alt="We5ive Logo"
              className="h-8"
            />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h4 className="font-medium text-lg">Sign Up For Our Newsletter!</h4>
          <p>
            Get notified about updates and be the first to get early access to
            new Podcast episodes.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-l-lg px-4 py-2 text-black"
            />
            <button className="bg-primary-500 hover:bg-primary-600 px-6 py-2 -translate-x-4 rounded-r-lg text-white font-medium ml-2">
              Subscribe
            </button>
          </div>
        </div>

      </div>
      
          
        
        <div className="flex flex-col pt-10 md:flex-row md:justify-between space-y-6 md:space-y-0">
        <div>
            <h4 className="font-medium text-lg">Contact Us</h4>
            <p className="text-sm">support@we5ive.com</p>
          </div>
          <div>
        
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
           
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-3">Social Links</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Image
                  src="/assets/Facebook.png" 
                  width={30}
                  height={30}
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
              <Image
                  src="/assets/Twitter.png" 
                  width={30}
                  height={30}
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
              <Image
                  src="/assets/Linkedin.png" 
                  width={30}
                  height={30}
                  alt="Linkedin"
                  className="h-6 w-6"
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
 {/* Bottom Section */}
      
      <div className="bg-purple-500 py-3 text-center">
        <p className="text-sm">&copy; 2024 | We5ive</p>
      </div>
    </footer>
  );
};

export default Footer;
