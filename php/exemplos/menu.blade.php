<div id="navbar" class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
        <li class="{{ strpos(Route::currentRouteName(), 'home') !== false ? 'active' : null }}">
            <a href="/">Home</a>
        </li>
        <li class="{{ strpos(Route::currentRouteName(), 'sobre') !== false ? 'active' : null }}">
            <a href="<?= route('sobre') ?>">Sobre</a>
        </li>
        <li class="{{ strpos(Route::currentRouteName(), 'contato') !== false ? 'active' : null }}">
            <a href="<?= route('contato') ?>">Contato</a>
        </li>
    </ul>
</div>