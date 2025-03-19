
import { User } from "lucide-react";

interface CastMember {
  name: string;
  role: string;
  avatarUrl?: string;
}

interface CastCrewSectionProps {
  director: string;
  cast: string[];
}

const CastCrewSection = ({ director, cast }: CastCrewSectionProps) => {
  // Transform cast array into CastMember objects
  const castMembers: CastMember[] = cast.map(name => ({
    name,
    role: "Actor", // Default role
    avatarUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}` // Random avatar
  }));
  
  // Add director to the crew members
  const crewMembers: CastMember[] = [
    {
      name: director,
      role: "Director",
      avatarUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70 + 70)}` // Different seed for crew
    }
  ];
  
  return (
    <div className="space-y-6">
      {/* Cast Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {castMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 bg-accent/10">
                {member.avatarUrl ? (
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
              <span className="font-medium text-sm">{member.name}</span>
              <span className="text-xs text-muted-foreground">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Crew Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Crew</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {crewMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 bg-accent/10">
                {member.avatarUrl ? (
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
              <span className="font-medium text-sm">{member.name}</span>
              <span className="text-xs text-muted-foreground">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastCrewSection;
