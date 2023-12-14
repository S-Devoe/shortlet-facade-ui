import Link from "next/link";
import Button from "../button/button";

const Menu = ({
  onClick,
  action,
}: {
  onClick: () => void;
  action?: () => void;
}) => (
  <div className="fixed bg-white h-screen w-screen z-50 top-0 left-0 pl-10 pt-20">
    <div className="rounded-full border w-fit" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3861 28.3778C23.1126 28.6916 22.6365 28.7242 22.3228 28.4507L17.7126 24.4315C17.5485 24.2884 17.4543 24.0813 17.4543 23.8635C17.4543 23.6457 17.5485 23.4386 17.7126 23.2955L22.3228 19.2763C22.6365 19.0028 23.1126 19.0354 23.3861 19.3492C23.6596 19.6629 23.6269 20.1389 23.3132 20.4124L20.219 23.1099L29.2605 23.1099C29.6766 23.1099 30.014 23.4473 30.014 23.8635C30.014 24.2797 29.6766 24.6171 29.2605 24.6171L20.219 24.6171L23.3132 27.3146C23.6269 27.5881 23.6596 28.0641 23.3861 28.3778Z"
          fill="#25292D"
        />
      </svg>
    </div>
    <ul className="w-max">
      <li className="my-6">
        <Link href="/about">About</Link>
      </li>
      <li className="my-6">
        <Link href="/about?s=faq">FAQ</Link>
      </li>
      <li className="mt-6">
        <Button
          className={"bg-orange px-5 py-3 rounded text-sm text-white"}
          onClick={action}
          text={"Join the Waitlist"}
        />
      </li>
    </ul>
  </div>
);

export default Menu;
