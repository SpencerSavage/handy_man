Comment.delete_all
Service.delete_all
Worker.delete_all 

5.times do 
  worker = Worker.create(
    fname: Faker::Creature::Cat.name,
    lname: Faker::TvShows::StarTrek.character,
    phone: '208-867-5309'
  )
  3.times do
    service = Service.create(
      sname: Faker::Construction.subcontract_category,
      stype: Faker::Construction.trade,
      location: Faker::Address.street_address,
      worker_id: worker.id
    )
    
    Comment.create(
      subject: Faker::Job.key_skill,
      body:Faker::Lorem.paragraph(sentence_count: 2),
      service_id: service.id
    )
  end 
end

# puts 'Data seeded'
# Service.all.each do |service|
#   puts "#{service.sname} #{service.stype}"
# end
# Worker.all.each do |worker|
#   puts "#{worker.fname} #{worker.lname}"
# end

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