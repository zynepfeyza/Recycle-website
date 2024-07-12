const getAnasayfaPage = (req, res) => {
    res.render('anasayfa', {
        link: 'anasayfa',
    });
};

const getHizmetlerPage = (req, res) => {
    res.render('hizmetler', {
        link: 'hizmetler',
    });
};

const getAyirmaHizPage = (req, res) => {
    res.render('ayirmaHiz', {
        link: 'ayirmaHiz',
    });
};

const getBalyalamaHizPage = (req, res) => {
    res.render('balyalamaHiz'), {
        link: 'balyalamaHiz',
    };
};

const getToplamaHizPage = (req, res) => {
    res.render('toplamaHiz', {
        link: 'toplamaHiz',
    });
};

const getDestekOlunPage = (req, res) => {
    res.render('destekOlun', {
        link: 'destekOlun',
    });
};

const getssSorularPage = (req, res) => {
    res.render('ssSorular', {
        link: 'ssSorular',
    });
};


export {getAnasayfaPage, getHizmetlerPage, getAyirmaHizPage, getBalyalamaHizPage, getToplamaHizPage, getDestekOlunPage, getssSorularPage};