import { Grid } from 'react-loader-spinner'

const Loader = ({ isLoading }) => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <Grid
        visible={isLoading}
        height="80"
        width="80"
        color="#79716B"
        ariaLabel="grid-loading"
      />
    </div>
  )
}

export default Loader