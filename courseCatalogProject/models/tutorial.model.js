module.exports = (mongoose) => {
  const tutorial = mongoose.model(
    "tutorial",
    new mongoose.Schema({ //see this line carefully
      title: {
        type: String,
        required: true,
      },
      description: String,
      published: Boolean,
      skills: [
        //Array of strings
        {
          type: String,
        },
      ],
      chapter: [
        //Array of strings
        {
          type: String,
        },
      ],
      priceInRupees: {
        type: Number,
        default: 5000,
        min: 0,
        max: 30000,
      },
      priceAfterDiscount: {
        type: Number,
        min: 0,
        max: 30000,
      },
      category: String,
      imageURL: {
        type: String,
        default:
          "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg",
      },
      videoURL: {
        type: String,
        default: "https://www.youtube.com/watch?v=MTdpHs6HWwM",
      },
      notesURL: {
        type: String,
        default: "https://www.mongodb.com/mern-stack",
      },
      duration: {
        type: Number,
        default: 60,
        min: 0,
        max: 1200,
      },
      popularity: {
        type: Number,
        default: 4.0,
      },
    })
  );
  return tutorial;
};

//Instead of export moongose for every schema, if we have more schemas for future. So export moongose also.
