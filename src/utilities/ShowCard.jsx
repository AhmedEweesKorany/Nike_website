const ShowCard = ({ imgUrl, bigShowImg, changeImg }) => {
    const handleClick = ()=>{
        if(bigShowImg !== imgUrl.bigShoe){
            changeImg(imgUrl.bigShoe)
        }
    }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShowImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer  `}
      onClick={handleClick}
    >
        <div className="bg-card bg-center bg-cover rounded-xl ">
            <img src={imgUrl.thumbnail} width={130} height={130} alt="shoe connection" />
        </div>
    </div>
  );
};

export default ShowCard;
