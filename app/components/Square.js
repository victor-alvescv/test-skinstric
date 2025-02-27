import classNames from 'classnames';

const Square = ({
    size = 'w-[350px] h-[350px]',
    dotted = true,
    borderColorClass = 'border-black',
    className = '',
    ...rest
  }) => {
    return (
      <div
        className={classNames(
          size,
          'border',
          dotted ? 'border-dotted' : 'border-solid',
          borderColorClass,
          'rotate-45',
          className
        )}
        {...rest}
      />
    );
  };
  
  export default Square;
