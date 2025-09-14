import { asset } from '../lib/asset'

// Tylko kolory. Tekst statusu tłumaczymy z i18n na podstawie key.
export const STATUS = {
  IN_PROGRESS:  { key: 'in_progress',  color: 'bg-emerald-600' },
  SUSPENDED:    { key: 'suspended',    color: 'bg-amber-600'   },
  DISCONTINUED: { key: 'discontinued', color: 'bg-rose-600'    },
  UNRELEASED:   { key: 'unreleased',   color: 'bg-slate-600'   },
  REJECTED:     { key: 'rejected',     color: 'bg-orange-600'  },
  LOST:         { key: 'lost',         color: 'bg-zinc-600'    },
};

// Klucze kategorii – nazwy bierzemy z i18n.
export const CATEGORY_KEYS = [
  'all',
  'minecraft',
  'it',
  'pvzgw2',
  'unreleased_mc',
  'unreleased_it',
  'upcoming_mc',
];

export const PROJECTS = [
  // --- Minecraft
  {
    category: 'minecraft', name: 'Ekipa Mod', status: STATUS.DISCONTINUED,
    icon: asset('icons/ekipa_mod.png'),
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ekipa-mod',
      nexusmods: 'https://www.nexusmods.com/minecraft/mods/231'
    }
  },
  {
    category: 'minecraft', name: 'Genzie Mod', status: STATUS.DISCONTINUED,
    icon: asset('icons/genzie_mod.png'),
    links: { curseforge: 'https://www.curseforge.com/minecraft/mc-mods/genzie-mod' }
  },
  {
    category: 'minecraft', name: 'Mods Translations', status: STATUS.IN_PROGRESS,
    icon: asset('icons/mods_translations.png'),
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/texture-packs/mods-translations',
      modrinth: 'https://modrinth.com/resourcepack/mods-translations'
    }
  },
  {
    category: 'minecraft', name: 'Portal Items', status: STATUS.SUSPENDED,
    icon: asset('icons/portal_items.gif'),
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/nether-portal-item',
      modrinth: 'https://modrinth.com/mod/nether-portal-item'
    }
  },
  {
    category: 'minecraft', name: 'Culinary Craft', status: STATUS.IN_PROGRESS,
    icon: asset('icons/culinary_craft.png'),
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/culinary-craft',
      modrinth: 'https://modrinth.com/mod/culinary-craft'
    }
  },
  {
    category: 'minecraft', name: 'Medica', status: STATUS.IN_PROGRESS,
    icon: asset('icons/medica_mod.png'),
    links: {
      curseforge: 'https://www.curseforge.com/minecraft/mc-mods/medicamod',
      modrinth: 'https://modrinth.com/mod/medicamod'
    }
  },

  // --- IT
  {
    category: 'it', name: 'Kuna Translator', status: STATUS.IN_PROGRESS,
    icon: asset('icons/kuna.png'),
    links: { github: 'https://github.com/KrystekInformatyk/Kuna-Translator/releases' }
  },
  {
    category: 'it', name: 'CD/DVD Virus', status: STATUS.IN_PROGRESS,
    icon: asset('icons/cd.png'),
    links: { github: 'https://github.com/KrystekInformatyk/cddvdvirus/releases' }
  },
  {
    category: 'it', name: 'Steam Achievement Manager', status: STATUS.IN_PROGRESS,
    icon: asset('icons/sam.png'),
    links: { gdrive: 'https://drive.google.com/file/d/1R0qRw2BOvR3Sk2z_qgx2IiqibtdnFcm3/view?usp=drive_link' },
    author: 'By Viking'
  },
  {
    category: 'it', name: 'Vulcan Grades Manager', status: STATUS.IN_PROGRESS,
    icon: asset('icons/vgm.png'),
    links: { github: 'https://github.com/KrystekInformatyk/VGM/releases/tag/1.0' }
  },
  {
    category: 'it', name: 'Lag Killer - Priority Tool', status: STATUS.IN_PROGRESS,
    icon: asset('icons/lag_killer.png'),
    links: {
      site: 'https://krystekinformatyk.github.io/LagKiller/',
      github: 'https://github.com/KrystekInformatyk/LagKiller/releases/tag/v1.0'
    }
  },

  // --- PvZ GW2
  {
    category: 'pvzgw2', name: 'Infinity of everything', status: STATUS.SUSPENDED,
    icon: asset('icons/infinity_of_everything.png'),
    links: { nexusmods: 'https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/60?tab=posts' }
  },
  {
    category: 'pvzgw2', name: 'Debug menu', status: STATUS.DISCONTINUED,
    icon: asset('icons/debug_menu.png'),
    links: { nexusmods: 'https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/35' }
  },

  // --- Minecraft (niewydane)
  {
    category: 'unreleased_mc', name: 'Poop Mod', status: STATUS.REJECTED,
    icon: asset('icons/poop_mod.png'),
    files: [{ name: 'poopmod.jar', path: asset('files/poopmod.jar') }],
    note: 'File status: recovered'
  },
  {
    category: 'unreleased_mc', name: 'Team X Mod', status: STATUS.LOST,
    icon: asset('icons/team_x_mod.png'),
    note: 'File status: lost'
  },
  {
    category: 'unreleased_mc', name: 'MoreBlocks', status: STATUS.LOST,
    icon: asset('icons/more_block.png'),
    note: 'File status: lost'
  },

  // --- IT (niewydane)
  {
    category: 'unreleased_it', name: 'MC Music Disc Manager', status: STATUS.UNRELEASED,
    icon: asset('icons/plyta.png'),
    files: [{ name: 'photos.zip', path: asset('files/photos.zip') }]
  },

  // --- Minecraft (nadchodzące)
  { category: 'upcoming_mc', name: 'Mob Items', status: STATUS.IN_PROGRESS, icon: asset('icons/mob_items.png') },
  { category: 'upcoming_mc', name: 'Add Unused', status: STATUS.IN_PROGRESS, icon: asset('icons/add_unused.png') },
  {
    category: 'upcoming_mc', name: 'Christianity Craft', status: STATUS.IN_PROGRESS,
    icon: asset('icons/christianity_craft.png'),
    author: 'By Mimi'
  },
];
