import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    title: String,
    description: String,
    location: String,
    jobType: String,
    sector: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Job = mongoose.model('Job', jobSchema);

export default Job;