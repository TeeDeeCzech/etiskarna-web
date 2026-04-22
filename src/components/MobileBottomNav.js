import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/katalog', icon: 'print',            label: 'Produkty'  },
  { to: '/sluzby',  icon: 'gallery_thumbnail', label: 'Služby'    },
  { to: '/poptavka',icon: 'calculate',         label: 'Poptávka'  },
  { to: '/kontakt', icon: 'mail',              label: 'Kontakt'   },
];

function MobileBottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl flex items-center justify-around px-6 z-50 md:hidden border-t border-outline-variant/30">
      {navItems.map(({ to, icon, label }) => {
        const active = pathname === to || (to === '/katalog' && pathname === '/');
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center ${active ? 'text-primary' : 'text-on-surface-variant'}`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {icon}
            </span>
            <span className="text-[9px] font-bold uppercase mt-1">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default MobileBottomNav;
