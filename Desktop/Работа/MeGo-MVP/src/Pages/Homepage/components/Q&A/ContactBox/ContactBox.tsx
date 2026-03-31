import './ContactBox.css'
export const ContactBox = ({ title, description, onClick, className }: { title: string; description: string; onClick: () => void; className?: string }  ) => {
  return (
    <div className="ContactRoot">
      <div className='contactHeader'>
        <div className='contactTitle'>{title}</div>
        <div className='contactDescription'>{description}</div>
      </div>

      <div className='contactForm'>
        <textarea className="Qtextarea" placeholder="Ваше сообщение" />
        <button className='buttonCon' onClick={onClick} type="submit">
          Отправить сообщение
        </button>
      </div>
    </div>
  );
};