const mongoose = require("mongoose");

const attributeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  options: [
    {
      option_level: {
        type: String,
        required: true,
      },
      images: [
        {
          type: String,
        },
      ],
    },
  ],
});

attributeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

attributeSchema.set("toJSON", {
  virtuals: true,
});

exports.Attribute = mongoose.model("Attribute", attributeSchema);
