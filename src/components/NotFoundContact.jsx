const NotFoundContact = () => {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-4">
        <div className="max-w-[30px]">
          <img src="/contact_not_found_icon.png" className="rounded-full"/>
        </div>
        <h3 className="text-2xl font-semibold text-white"> Contact Not Found</h3>
      </div>
    );
  };
  
  export default NotFoundContact;