-- ════════════════════════════════════════════════════════════
-- Turbomindz — Seed Data (run AFTER 0001_initial_schema.sql)
-- Loads the 9 themes and 4 characters as content rows so the
-- app can read them from Supabase instead of the mock data.
-- ════════════════════════════════════════════════════════════

-- Themes
insert into public.content (slug, type, title, body, metadata) values
  ('classical-foundations', 'theme', 'Classical Foundations', 'Socrates, Plato, Aristotle, Seneca, Epictetus',
   jsonb_build_object('color', '#1A237E', 'question', 'What is virtue?')),
  ('enlightenment-reason', 'theme', 'Enlightenment & Reason', 'Kant, Voltaire, Locke, Newton',
   jsonb_build_object('color', '#C9A227', 'question', 'What can we know?')),
  ('existentialism-modern', 'theme', 'Existentialism & Modern', 'Nietzsche, Kierkegaard, Camus',
   jsonb_build_object('color', '#4A148C', 'question', 'What is freedom?')),
  ('mysticism-esoterica', 'theme', 'Mysticism & Esoterica', 'Hermes Trismegistus, Rumi, Paracelsus',
   jsonb_build_object('color', '#00695C', 'question', 'What is hidden?')),
  ('eastern-wisdom', 'theme', 'Eastern Wisdom', 'Laozi, Confucius, Buddha',
   jsonb_build_object('color', '#E65100', 'question', 'What is balance?')),
  ('science-modernity', 'theme', 'Science & Modernity', 'Tesla, Einstein, Darwin, da Vinci',
   jsonb_build_object('color', '#607D8B', 'question', 'What is progress?')),
  ('poetry-aesthetics', 'theme', 'Poetry & Aesthetics', 'Rilke, Whitman, Gibran, Keats',
   jsonb_build_object('color', '#AD1457', 'question', 'What is beauty?')),
  ('civic-social', 'theme', 'Civic & Social', 'Paine, Gandhi, Marcus Aurelius',
   jsonb_build_object('color', '#B71C1C', 'question', 'What is justice?')),
  ('psychology-mind', 'theme', 'Psychology & Mind', 'William James, Epictetus, Aristotle',
   jsonb_build_object('color', '#00838F', 'question', 'What is the self?'))
on conflict (slug) do update set
  title = excluded.title,
  body = excluded.body,
  metadata = excluded.metadata;

-- Characters
insert into public.content (slug, type, title, body, metadata) values
  ('character-cosmo', 'character', 'Cosmo',
   'Orange boots, fishbowl helmet, and a heart full of questions. Cosmo leads every expedition with wide-eyed wonder.',
   jsonb_build_object('emoji', '🚀', 'role', 'The Curious Astronaut', 'color', '#004D5C',
                      'voice_pct', 60, 'catchphrase', 'But wait—', 'threshold_scene', 1)),
  ('character-nova', 'character', 'Nova',
   'Three floating orbs and a gold infinity pendant. Nova sees connections where others see chaos.',
   jsonb_build_object('emoji', '🔮', 'role', 'The Pattern Seeker', 'color', '#C9A227',
                      'voice_pct', 20, 'catchphrase', 'The pattern is—', 'threshold_scene', 6)),
  ('character-stella', 'character', 'Stella',
   'Blue-to-purple gradient hair, gold star earring, constellation freckles. Stella turns philosophy into practice.',
   jsonb_build_object('emoji', '🌟', 'role', 'The Community Weaver', 'color', '#AD1457',
                      'voice_pct', 15, 'catchphrase', 'How do people use this?', 'threshold_scene', 16)),
  ('character-luna', 'character', 'Luna',
   'Leather notebook, mismatched socks, violet hair streak. Luna rarely speaks. When she does, the universe pauses.',
   jsonb_build_object('emoji', '🌙', 'role', 'The Quiet Observer', 'color', '#4A148C',
                      'voice_pct', 5, 'catchphrase', '...', 'threshold_scene', 50))
on conflict (slug) do update set
  title = excluded.title,
  body = excluded.body,
  metadata = excluded.metadata;

-- Initial stats placeholders
insert into public.stats (key, value) values
  ('total_minted', '150'::jsonb),
  ('total_target', '888'::jsonb),
  ('total_marriages', '0'::jsonb),
  ('active_users_30d', '0'::jsonb)
on conflict (key) do nothing;
