import { signOut } from 'next-auth/react';
import Button from '../../../shared/components/Button';
import Logo from '../../../shared/assets/images/Logo.svg';
import ExitIconOutlined from '../../../shared/assets/icons/exitIconOutlined.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="flex items-center gap-x-[16.6px] font-light text-[28px] leading-10 text-[#333333]">
        <Logo className="fill-[#333333] w-[104.4px] h-9" />
        Books
      </h1>
      <Button
        onPress={() => signOut({ callbackUrl: undefined, redirect: false })}
        className="rounded-full px-2 py-2 border border-[#333333] border-opacity-20"
      >
        <ExitIconOutlined className="stroke-[#333333] w-4 h-4" />
      </Button>
    </header>
  );
};

export default Header;
