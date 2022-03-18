Comment.delete_all
Service.delete_all
Worker.delete_all 

5.times do 
  worker = Worker.create(
    fname: Faker::TvShows::RuPaul.queen
    lname: Faker::TvShows::RuPaul.queen
    phone: '208-867-5309'
  )
  3.times do
    service = Service.create(
      sname: Faker::TvShows::RuPaul.queen,
      stype: 'Mechanic'
      worker_id: worker.id
    )
    
    Comment.create(
      subject: Faker::Creature::Cat.name,
      body:Faker::TvShows::RuPaul.queen
      service_id: service.id
    )
  end 
end

# puts "Number of Billboards: #{Billboard.all.count}"
# Billboard.all.each do |billboard|  
#   puts "#{billboard.id}, title: #{billboard.title} desc: #{billboard.description}"
# end

# puts "Number of Artists: #{Artist.all.count}"
# Artist.all.each do |artist|  
#   puts "#{artist.id}, title: #{artist.title} rank: #{artist.rank}"
# end

# puts "Number of Songs: #{Song.all.count}"
# Song.all.each do |song|  
#   puts "#{song.id}, title: #{song.subject} duration: #{song.duration}"
# end