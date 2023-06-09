//consonantes = "bcdfghjklmnñpqrstvwxyz"
//vocales = "aeiou"
silabas = `a e i o u
            ba be bi bo bu
            ca ce ci co cu
            cha che chi cho chu
            da de di do du
            fa fe fi fo fu
            ga ge gi go gu
            gue gui
            ha he hi ho hu
            ja je ji jo ju
            ka ke ki ko ku
            la le li lo lu
            ma me mi mo mu
            na ne ni no nu
            ña ñe ñi ño ñu
            pa pe pi po pu
            que qui
            ra re ri ro ru
            sa se si so su
            ta te ti to tu
            va ve vi vo vu
            xa xe xi xo xu                    
            ya ye yi yo yu
            za zo zu`.replace(/\s{2,}/g, ' ').replace(/\n/g, " ").split(" ")

pronunciaciones = {};
pronunciaciones['ba'] = "bá"
pronunciaciones['be'] = "bé"
pronunciaciones['bi'] = "bí"
pronunciaciones['ci'] = "cì"
pronunciaciones['cu'] = "cù"
pronunciaciones['chu'] = "chù"
pronunciaciones['ga'] = "gá"
pronunciaciones['ge'] = "gë"
pronunciaciones['go'] = "gò"
pronunciaciones['gu'] = "gú"
pronunciaciones['ha'] = "a"
pronunciaciones['he'] = "e"
pronunciaciones['hi'] = "i"
pronunciaciones['ho'] = "o"
pronunciaciones['hu'] = "u"
pronunciaciones['je'] = "ge"
pronunciaciones['ji'] = "gi"
pronunciaciones['ju'] = "jú"
pronunciaciones['pu'] = "pú"
pronunciaciones['so'] = "sò"
pronunciaciones['to'] = "tò"
pronunciaciones['xa'] = "xà"
pronunciaciones['xe'] = "xè"
pronunciaciones['za'] = "zä"

emojis = {};
emojis['a']=['abeja','']
emojis['e']=['erizo','']
emojis['i']=['imán','']
emojis['o']=['oso','']
emojis['u']=['unicornio','']
emojis['ba']=['ballena','']
emojis['be']=['bebé','']
emojis['bi']=['bicicleta','']
emojis['bo']=['bolos','']
emojis['bu']=['buho','']
emojis['ca']=['caracol','']
emojis['ce']=['cerdo','']
emojis['ci']=['cisne','']
emojis['co']=['conejo','']
emojis['cu']=['culebra','']
emojis['cha']=['','']
emojis['che']=['','']
emojis['chi']=['','']
emojis['cho']=['','']
emojis['chu']=['','']
emojis['da']=['','']
emojis['de']=['delfín','']
emojis['di']=['dinosaurio','']
emojis['do']=['','']
emojis['du']=['','']
emojis['fa']=['fantasma','']
emojis['fe']=['','']
emojis['fi']=['','']
emojis['fo']=['','']
emojis['fu']=['fútbol','']
emojis['ga']=['gato','']
emojis['ge']=['','']
emojis['gi']=['girasol','']
emojis['go']=['gorila','']
emojis['gu']=['','']
emojis['gue']=['guepardo','']
emojis['gui']=['','']
emojis['ha']=['','']
emojis['he']=['','']
emojis['hi']=['hipopótamo','']
emojis['ho']=['hormiga','']
emojis['hu']=['','']
emojis['ja']=['jabalí','']
emojis['je']=['','']
emojis['ji']=['jirafa','']
emojis['jo']=['','']
emojis['ju']=['','']
emojis['ka']=['','']
emojis['ke']=['','']
emojis['ki']=['','']
emojis['ko']=['koala','']
emojis['ku']=['','']
emojis['la']=['lagarto','']
emojis['le']=['león','']
emojis['li']=['libro','']
emojis['lo']=['loro','']
emojis['lu']=['lupa','']
emojis['ma']=['mariposa','']
emojis['me']=['mesa','']
emojis['mi']=['','']
emojis['mo']=['mono','']
emojis['mu']=['murciélago','']
emojis['na']=['nariz','']
emojis['ne']=['negro','']
emojis['ni']=['','']
emojis['no']=['','']
emojis['nu']=['nutria','']
emojis['ña']=['','']
emojis['ñe']=['','']
emojis['ñi']=['','']
emojis['ño']=['','']
emojis['ñu']=['','']
emojis['pa']=['pavo','']
emojis['pe']=['perro','']
emojis['pi']=['pingüino','']
emojis['po']=['pollito','']
emojis['pu']=['pulpo','']
emojis['que']=['','']
emojis['qui']=['','']
emojis['ra']=['ratón','']
emojis['re']=['rey','']
emojis['ri']=['rinoceronte','']
emojis['ro']=['robot','']
emojis['ru']=['','']
emojis['sa']=['saltamontes','']
emojis['se']=['serpiente','']
emojis['si']=['silla','']
emojis['so']=['sol','']
emojis['su']=['','']
emojis['ta']=['','']
emojis['te']=['tenis','']
emojis['ti']=['tiburón','']
emojis['to']=['tortuga','']
emojis['tu']=['túnez','']
emojis['va']=['vaca','']
emojis['ve']=['verde','']
emojis['vi']=['','']
emojis['vo']=['','']
emojis['vu']=['','']
emojis['xa']=['','']
emojis['xe']=['','']
emojis['xi']=['xilófono','']
emojis['xo']=['','']
emojis['xu']=['','']
emojis['ya']=['','']
emojis['ye']=['','']
emojis['yi']=['','']
emojis['yo']=['','']
emojis['yu']=['','']
emojis['za']=['zapatos','']
emojis['zo']=['zorro','']
emojis['zu']=['','']