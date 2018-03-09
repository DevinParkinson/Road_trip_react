class Api::TripsController < ApplicationController
  def index
    render json: Trip.all
  end

  def show  
    trips = Trip.find(pararms[:id])
    location = Trip.locations.all
    
    
    render json: trip, location
  end


  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render json: { errors: trip.errors }, status: :unprocessable_entity
    end
  end

  def update
    trip = Trip.find(params[:id])
    trip.update(complete: !trip.complete)
    render json: trip
  end

  def destroy
    Trip.find(params[:id]).destroy
    render json: { message: 'Trip deleted' }
  end

  private

  def trip_params
    params.require(:trip).permit(:name)
  end

end
