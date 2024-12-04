type Props = {
  label?: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}
export const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline
}: Props) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
          w-full
         bg-sky-500
          disabled:opacity-70 
          disabled:cursor-not-allowed
          text-white 
          px-5 
          py-2 
          rounded-full 
          hover:opacity-80
          transition
         `
        }
      >
        {label}
      </button>
    </>
  );
}

/* 
  className="
                      w-full
                      bg-sky-500
                      disabled:opacity-70 
                      disabled:cursor-not-allowed
                      text-white 
                      px-5 
                      py-2 
                      rounded-full 
                      hover:opacity-80
                      transition
                    "
 */


/*
 
disabled:opacity-70
disabled:cursor-not-allowed
rounded-full
hover:opacity-80
transition
border-2
font-semibold
focus:outline-none
${fullWidth ? 'w-full' : 'w-fit'}
${secondary ? 'bg-white' : 'bg-sky-500'}
${secondary ? 'border-black' : 'border-sky-500'}
${secondary ? 'text-black' : 'text-white'} 
${large ? 'text-lg' : 'text-md'}
${large ? 'px-5' : 'px-4'}
${large ? 'py-3' : 'py-2'}
${outline ? 'bg-transparent' : ''}
${outline ? "border-white" : ""}
${outline ? "text-white" : ""}
*/