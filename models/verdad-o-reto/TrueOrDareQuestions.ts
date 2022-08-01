import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const TrueOrDareQuestionSchema = new mongoose.Schema({
  statement: {
    /* The name of this pet */
    type: String,
    required: [true, 'Please provide a statement for this question.'],
    maxlength: [160, 'Name cannot be more than 60 characters'],
  },

  type: {
    type: String,
    enum: ['verdad', 'reto'],
    required: [true, 'Please provide a type for this question.'],
  },

  category: {
    /* The category of this question */
    type: Array,
    default: [],
  },
})

export default mongoose.models.TrueOrDareQuestion || mongoose.model('TrueOrDareQuestion', TrueOrDareQuestionSchema)
