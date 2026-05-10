import { useParams, Link } from 'react-router-dom';
import { useState } from "react";
import Data from '../Data/ArtistsData';


interface Social {
  id: string;
  label: string;
  href: string;
  color: string;
  textColor: string;
  icon: React.ReactNode;
}

const socials: Social[] = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/",
    color: "#FF0000",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "spotify",
    label: "Spotify",
    href: "https://www.spotify.com/",
    color: "#1DB954",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/",
    color: "#010101",
    textColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

function SocialMediaBar({ youtubeLink }: { youtubeLink?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap p-6">
      {socials.map(({ id, label, href, color, textColor, icon }) => {
        const isHovered = hovered === id;
        const finalHref = id === 'youtube' && youtubeLink ? youtubeLink : href;
        return (
          <div key={id} className="relative flex flex-col items-center">
            
            <div
              className="absolute pointer-events-none whitespace-nowrap text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full transition-all duration-300"
              style={{
                backgroundColor: color,
                color: textColor,
                bottom: isHovered ? "calc(100% + 10px)" : "calc(100% + 4px)",
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scale(1)" : "scale(0.85)",
                transformOrigin: "bottom center",
                boxShadow: isHovered ? `0 4px 14px ${color}55` : "none",
                letterSpacing: "0.03em",
              }}
            >
              {label}
              
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: `5px solid ${color}`,
                }}
              />
            </div>

           
            <a
              href={finalHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 overflow-hidden select-none"
              style={{
                backgroundColor: isHovered ? color : "transparent",
                color: isHovered ? textColor : "#888",
                border: `1.5px solid ${isHovered ? color : "#d1d5db"}`,
                transform: isHovered ? "translateY(-4px) scale(1.1)" : "translateY(0) scale(1)",
                boxShadow: isHovered ? `0 8px 24px ${color}44` : "none",
              }}
            >
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
}

function DetailsArtist() {
  const { id } = useParams();
  const artist = Data.find((item) => String(item.id) === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#060D1F] flex items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white mb-4">Artist not found</h1>
          <Link to="/Program" className="text-[#dc1e1e] text-sm hover:underline">← Back to artists</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-start justify-center p-6 pt-10 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <div className="w-full max-w-4xl bg-[#2b2c2c] rounded-[28px] overflow-hidden flex flex-col md:flex-row">

        
        <div className="relative w-full md:w-5/12 shrink-0 overflow-hidden bg-[#121a2c]">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover object-top"
          />
          
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-[#000000] to-transparent" />

          
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <Link
              to="/Program"
              className="flex items-center gap-1.5 text-white/50 text-sm hover:text-[#dc1e1e] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Artists
            </Link>
          </div>

         
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex gap-2 flex-wrap">
            {[artist.Category].map((g) => (
              <span
                key={g}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#dc1e1e]/15 text-[#dc1e1e] border border-[#dc1e1e]/30 tracking-wide"
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        
        <div className="flex-1 px-5 pt-5 pb-6 md:p-8 flex flex-col justify-center">

          
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-medium text-white leading-tight">{artist.name}</h1>
            </div>
          </div>

          {artist.description && (
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {artist.description}
            </p>
          )}

          
          <div className="rounded-2xl bg-white/4 border border-white/[0.07] px-4 mb-5">
            {[
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                label: 'Performance time',
                value: artist.time,
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Venue',
                value: artist.stage,
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                ),
                label: 'Date',
                value: artist.date ?? 'Saturday, 14 June 2025',
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 py-2.5 border-b border-white/[0.07] last:border-none"
              >
                <div className="w-8 h-8 rounded-[10px] bg-[#dc1e1e]/12 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[11px] text-white/35 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        
<SocialMediaBar youtubeLink={artist.YT} />
         
          <div className="flex gap-2.5">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#dc1e1e] text-white text-sm font-medium hover:bg-[#991414] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 010-6h1l1 3-3 3zM22 9a3 3 0 000-6h-1l-1 3 3 3zM7 3h10M7 21h10M2 9v6M22 9v6M2 15a3 3 0 000 6h1l1-3-3-3zM22 15a3 3 0 010 6h-1l-1-3 3-3z"/>
              </svg>
              Get tickets
            </button>
            <button className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-[#dc1e1e]/10 border border-[#dc1e1e]/25 text-[#dc1e1e] hover:bg-[#dc1e1e]/20 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DetailsArtist;