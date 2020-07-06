export const calculateVoteAverage = (vote, allVotes, rank) => {
    return (allVotes * rank + vote) / (allVotes + 1)
}